import React from 'react'
import styled from 'styled-components'
import { Checkbox } from './checkbox'

const PADDING = 30

const Tr = styled.tr`
  border: solid 1px;
`

const Td = styled.td`
  padding-left: ${p => p.$nestingCounter * PADDING}px;
  position: relative;
  cursor: ${p => p.$isClickable ? 'pointer' : 'auto'};
  pointer-events: ${p => p.$isClickable ? 'auto' : 'none'};
`

export const Row = ({ row, children, showCheckbox, nestingCounter }) => {
  const isCheckedInitially = React.useMemo(() => localStorage.getItem(row.id) === 'true', [row])
  const [isChecked, setIsChecked] = React.useState(isCheckedInitially)
  const onCheckboxClick = React.useCallback(
    () => {
      setIsChecked((prev) => {
        const value = !prev
        localStorage.setItem(row.id, value)
        return value
      })
    },
    [row, setIsChecked]
  )

  const [isHidden, setIsHidden] = React.useState(!isCheckedInitially)
  const onRowClick = React.useCallback(() => {
    setIsHidden((prev) => !prev)
  }, [setIsHidden])
  const showChildren = !isHidden && row.children && row.children.length

  return (
    <React.Fragment>
      <Tr>
        <Td 
          $isClickable={row.children && row.children.length} 
          $nestingCounter={nestingCounter}
          onClick={onRowClick} 
        >
          {showCheckbox && (
            <Checkbox 
              id={row.id} 
              checked={isChecked} 
              value={isChecked} 
              onChange={onCheckboxClick} 
            />
          )}
          {row.text}
        </Td>
      </Tr>
      {showChildren && children}
    </React.Fragment>
  )
}
