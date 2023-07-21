import React from 'react'
import OKVED from './OKVED.json'
import { Table } from './components/table';

function App() {
  const data = React.useMemo(() => OKVED, [])

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default App;
