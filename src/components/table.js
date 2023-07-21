import React from 'react'
import { Row } from './row'

const RecursiveRows = ({ rows }) => {
  return (
    rows.map(row => (
      <Row key={row.id} row={row}>
        <RecursiveRows rows={row.children} />
      </Row>
    ))
  )
}

export const Table = ({ data }) => {
  return (
    <table>
      <tbody>
        <RecursiveRows rows={data} />
      </tbody>
    </table>
  )
}