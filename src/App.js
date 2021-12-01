import './App.css';
import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import Header from './components/Header';
import AddItem from './components/AddItem';
import SelectItem from './components/SelectItem';
import ItemList from './components/ItemList';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');

  const clearState = () => {
    setListContainer([]);
    setSelectedItem('');
  }

  return (
    <div className="App">
      <Header />
      {
      selectedItem.length > 0
        ?
        <div className='Result'>
          <p>Your decision is </p>
          <p>{selectedItem}</p>
          <div className='Pink'>
            <Button
              id='decide-again'
              onClick={() => clearState()}
            >
              Decide again
            </Button>
          </div>
        </div>
        :
        <>
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
        </>
      }
    </div>
  );
}

export default App;
