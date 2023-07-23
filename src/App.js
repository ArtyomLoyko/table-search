import React from 'react'
import OKVED from './OKVED.json'
import { Table } from './components/table';
import { SearchInput } from './components/search'

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const data = React.useMemo(() => OKVED, [])

  return (
    <div>
      <SearchInput value={searchValue} setValue={setSearchValue} />
      <Table data={data} searchValue={searchValue} />
    </div>
  );
}

export default App;
