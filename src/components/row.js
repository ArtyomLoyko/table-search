import React from 'react'
import styled from 'styled-components'
import { Checkbox } from './checkbox'
import { checkIfRowExist, setRowToStorage, removeRowFromStorage } from './../utils'

const PADDING = 30

const Tr = styled.tr`
  border: solid 1px;
`

const Td = styled.td`
  padding-left: ${p => p.$nestingCounter * PADDING}px;
  position: relative;
  cursor: ${p => p.$isClickable ? 'pointer' : 'auto'};
`

export const Row = ({ row, children, showCheckbox, nestingCounter, rowIdsToOpen, path }) => {
  const rowId = row.id.toString()
  const isCheckedInitially = React.useMemo(() => checkIfRowExist(rowId), [rowId])
  const [isChecked, setIsChecked] = React.useState(isCheckedInitially)
  const onCheckboxClick = React.useCallback(
    () => {
      setIsChecked((prev) => {
        const newValue = !prev
        if (newValue) {
          setRowToStorage(rowId, path)
        } else {
          removeRowFromStorage(rowId)
        }
        return newValue
      })
    },
    [rowId, path, setIsChecked]
  )

  const isHiddenInitially = !rowIdsToOpen.includes(rowId)
  const isClickable = Boolean(row.children && row.children.length)
  const [isHidden, setIsHidden] = React.useState(isHiddenInitially)
  const onRowClick = React.useCallback(() => {
    if (isClickable) {
      setIsHidden((prev) => !prev)
    }
  }, [setIsHidden, isClickable])
  const showChildren = !isHidden && isClickable

  return (
    <React.Fragment>
      <Tr>
        <Td 
          $isClickable={isClickable} 
          $nestingCounter={nestingCounter}
          onClick={onRowClick}
        >
          {showCheckbox && (
            <Checkbox 
              id={rowId} 
              checked={isChecked} 
              value={isChecked} 
              onChange={onCheckboxClick} 
            />
          )}
          {row.text}
        </Td>
      </Tr>
      {showChildren && React.cloneElement(children, { path: path ? `${path}-${rowId}` : rowId })}
    </React.Fragment>
  )
}
