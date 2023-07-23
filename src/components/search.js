import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
  padding: 5px;
  margin-bottom: 30px;
`

export const SearchInput = ({value, setValue}) => {
  const onChange = React.useCallback((e) => setValue(e.target.value), [setValue])
  
  return (
    <Input type='text' placeholder='Search' value={value} onChange={onChange} />
  )
}