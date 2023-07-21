import React from 'react'
import { Row } from './row'
import { styled } from 'styled-components'

const TableStyled = styled.table`
  border-collapse: collapse;
`

const RecursiveRows = ({ rows, showCheckbox = true, nestingCounter = 0}) => {
  return rows.map((row) => (
    <Row key={row.id} row={row} showCheckbox={showCheckbox} nestingCounter={nestingCounter}>
      <RecursiveRows rows={row.children} nestingCounter={nestingCounter + 1} />
    </Row>
  ))
}

export const Table = ({ data }) => {
  return (
    <TableStyled>
      <tbody>
        <RecursiveRows rows={data} showCheckbox={false} />
      </tbody>
    </TableStyled>
  )
}
