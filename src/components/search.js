import React from 'react'

export const SearchInput = ({value, setValue}) => {
  const onChange = React.useCallback((e) => setValue(e.target.value), [setValue])
  
  return (
    <input type='text' value={value} onChange={onChange} />
  )
}