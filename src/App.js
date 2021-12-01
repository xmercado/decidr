import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import SelectItem from './components/SelectItem';
import ItemList from './components/ItemList';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  console.log('Selected item ', selectedItem);

  return (
    <div className="App">
      <Header />
      <ItemList
        listContainer={listContainer}
        setListContainer={setListContainer}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <div>
        <AddItem 
          listContainer={listContainer}
          setListContainer={setListContainer}
        />
        <SelectItem 
          listContainer={listContainer}
          setListContainer={setListContainer}
          setSelectedItem={setSelectedItem}/>
      </div>
    </div>
  );
}

export default App;
