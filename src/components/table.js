import React from 'react'
import { Row } from './row'
import { styled } from 'styled-components'
import { getRowsToOpen } from '../local-storage'

const TableStyled = styled.table`
  border-collapse: collapse;
`

const RecursiveRows = ({
  rows,
  showCheckbox = true,
  nestingCounter = 0,
  path = '',
  rowsToOpen,
  searchValue,
}) => {
  return rows.map((row) => (
    <Row
      key={row.id.toString()}
      row={row}
      showCheckbox={showCheckbox}
      nestingCounter={nestingCounter}
      path={path}
      rowsToOpen={rowsToOpen}
      searchValue={searchValue}
    >
      <RecursiveRows
        rows={row.children}
        nestingCounter={nestingCounter + 1}
        rowsToOpen={rowsToOpen}
        path={path ? `${path}-${row.id}` : row.id}
        searchValue={searchValue}
      />
    </Row>
  ))
}

export const Table = ({ data, searchValue }) => {
  const rowsToOpen = React.useMemo(() => getRowsToOpen(), [])

  return (
    <TableStyled>
      <tbody>
        <RecursiveRows
          rows={data}
          showCheckbox={false}
          rowsToOpen={rowsToOpen}
          searchValue={searchValue}
        />
      </tbody>
    </TableStyled>
  )
}
