import React from 'react'
import styled from 'styled-components'
import { Checkbox } from './checkbox'
import { useCheckbox, useRowClick, useSearch } from '../hooks'

const PADDING = 5
const PADDING_LEFT = 30

const Tr = styled.tr`
  border: solid 1px;
`

const Td = styled.td`
  padding: ${PADDING}px;
  padding-left: ${(p) => p.$nestingCounter * PADDING_LEFT + PADDING}px;
  position: relative;
  cursor: ${(p) => (p.$isClickable ? 'pointer' : 'auto')};
  &:hover {
    background-color: gray;
  }
`

export const Row = ({
  row,
  children,
  showCheckbox,
  nestingCounter,
  rowsToOpen,
  path,
  searchValue,
}) => {
  const rowId = row.id.toString()

  const { isChecked, onCheckboxClick } = useCheckbox({ rowId, path })
  const { isClickable, showChildren, onRowClick, setIsHidden } = useRowClick({
    rowId,
    row,
    rowsToOpen,
  })
  const { isSearchable } = useSearch({ searchValue, row, setIsHidden })

  return (
    <React.Fragment>
      {!isSearchable && (
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
      )}
      {showChildren && children}
    </React.Fragment>
  )
}
