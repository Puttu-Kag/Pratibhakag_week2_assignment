import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddEntry from './Components/AddEntry';
import Home from './Components/Home';
import ViewEntries from './Components/ViewEntries';
import useEntries from './Components/useEntries';

function App() {
  const { entries, addEntry, deleteEntry, editEntry} = useEntries();

  return (
    <Router>
      <div className='app'>
        <h1>Travel journal</h1>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/add" element={<AddEntry addEntry={addEntry} />}></Route>
          <Route
            path="/entries" 
            element={
              <ViewEntries
                entries={entries}
                deleteEntry={deleteEntry}
                editEntry={editEntry}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

