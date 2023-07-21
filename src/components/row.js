import React from 'react'

export const Row = ({ row, children }) => {
  const isInitiallyHidden = true
  const [isHidden, setIsHidden] = React.useState(isInitiallyHidden)
  const onClick = React.useCallback(() => {
    setIsHidden(prev => !prev)
  }, [setIsHidden])
  const showChildren = !isHidden && row.children

  return (
    <React.Fragment>
      <tr onClick={onClick}>
        <td>{row.text}</td>
      </tr>
      {showChildren && children}
    </React.Fragment>
  )
}