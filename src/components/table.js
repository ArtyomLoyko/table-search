import React from 'react'
import { Row } from './row'
import { styled } from 'styled-components'
import { getRowIdsToOpen } from '../utils'

const TableStyled = styled.table`
  border-collapse: collapse;
`

const RecursiveRows = ({ rows, showCheckbox = true, nestingCounter = 0, path = '', rowIdsToOpen }) => {
  return rows.map((row) => (
    <Row key={row.id.toString()} row={row} showCheckbox={showCheckbox} nestingCounter={nestingCounter} path={path} rowIdsToOpen={rowIdsToOpen}>
      <RecursiveRows rows={row.children} nestingCounter={nestingCounter + 1} rowIdsToOpen={rowIdsToOpen} />
    </Row>
  ))
}

export const Table = ({ data }) => {
  const rowIdsToOpen = React.useMemo(() => getRowIdsToOpen(), [])

  return (
    <TableStyled>
      <tbody>
        <RecursiveRows rows={data} showCheckbox={false} rowIdsToOpen={rowIdsToOpen}/>
      </tbody>
    </TableStyled>
  )
}
