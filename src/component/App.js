import React from 'react'
import AppHeader from '../component/AppHeader'
import AddItem from '../component/AddItem'
import AppPanel from '../component/AppPanel'
import SearchPanel from '../component/SearchPanel'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <AppHeader/>
      <AddItem/>
      <AppPanel/>
      <SearchPanel/>
    </div>
  );
}

export default App;
