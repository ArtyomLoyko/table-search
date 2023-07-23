import React from 'react'
import styled from 'styled-components'
import OKVED from './OKVED.json'
import { Table } from './components/table';
import { SearchInput } from './components/search'

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5%;
`

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const data = React.useMemo(() => OKVED, [])

  return (
    <Container>
      <SearchInput value={searchValue} setValue={setSearchValue} />
      <Table data={data} searchValue={searchValue} />
    </Container>
  );
}

export default App;
