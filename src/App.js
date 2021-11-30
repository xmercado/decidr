import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import SelectItem from './components/SelectItem';
import ItemList from './components/ItemList';

function App() {
  const [listContainer, setListContainer] = useState([]);

  return (
    <div className="App">
      <Header />
      <ItemList
        listContainer={listContainer}
        setListContainer={setListContainer}
      />
      <AddItem 
        listContainer={listContainer}
        setListContainer={setListContainer}
      />
      <SelectItem />
    </div>
  );
}

export default App;
