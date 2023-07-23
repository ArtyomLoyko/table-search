import React from 'react'
import {
  checkIfRowExist,
  setRowToStorage,
  removeRowFromStorage,
} from './local-storage'

export const useCheckbox = ({ rowId, path }) => {
  const isCheckedInitially = React.useMemo(
    () => checkIfRowExist(rowId),
    [rowId]
  )
  const [isChecked, setIsChecked] = React.useState(isCheckedInitially)
  const onCheckboxClick = React.useCallback(() => {
    setIsChecked((prev) => {
      const newValue = !prev
      if (newValue) {
        setRowToStorage(rowId, path)
      } else {
        removeRowFromStorage(rowId)
      }
      return newValue
    })
  }, [rowId, path, setIsChecked])

  return { isChecked, onCheckboxClick }
}

export const useRowClick = ({ rowId, row, rowsToOpen }) => {
  const isHiddenInitially = !rowsToOpen.includes(rowId)
  const isClickable = Boolean(row.children && row.children.length)
  const [isHidden, setIsHidden] = React.useState(isHiddenInitially)
  const onRowClick = React.useCallback(() => {
    if (isClickable) {
      setIsHidden((prev) => !prev)
    }
  }, [setIsHidden, isClickable])
  const showChildren = !isHidden && isClickable

  return { isClickable, showChildren, onRowClick, setIsHidden }
}

export const useSearch = ({ searchValue, row, setIsHidden }) => {
  const lowerText = row.text.toLowerCase()
  const lowerSearch = searchValue.toLowerCase()
  const isSearchable = Boolean(searchValue && !lowerText.includes(lowerSearch))
  React.useEffect(() => {
    if (searchValue) {
      setIsHidden(false)
    }
  }, [searchValue, setIsHidden])

  return { isSearchable }
}
