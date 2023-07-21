import React from 'react'
import OKVED from './OKVED.json'
import './App.css';
import { Table } from './components/table';

function App() {
  const data = React.useMemo(() => OKVED, [])

  return (
    <div className="App">
      <Table data={data} />
    </div>
  );
}

export default App;
