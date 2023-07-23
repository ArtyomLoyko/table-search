const ROWS_KEY = 'rows'

const getRows = () => JSON.parse(localStorage.getItem(ROWS_KEY)) || {}
const setRows = (rows) => localStorage.setItem(ROWS_KEY, JSON.stringify(rows))

export const setRowToStorage = (rowId, pathToRow) => {
  const rows = getRows()
  rows[rowId] = pathToRow
  setRows(rows)
}

export const removeRowFromStorage = (rowId) => {
  const rows = getRows()
  delete rows[rowId]
  setRows(rows)
}

export const checkIfRowExist = (rowId) => {
  const rows = getRows()
  return Boolean(rows[rowId])
}

export const getRowsToOpen = () => {
  const rows = getRows()
  const paths = Object.values(rows)
  const ids = paths.map((p) => p.split('-')).flat()
  return Array.from(new Set(ids))
}
