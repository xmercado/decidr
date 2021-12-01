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
          <SelectItem 
              listContainer={listContainer}
              setListContainer={setListContainer}
              setSelectedItem={setSelectedItem}/>
          <div className='Button'>
            <Button
              id='back'
              onClick={() => clearState()}
              variant='contained'
              color='secondary'
            >
              Back
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
            <SelectItem 
              listContainer={listContainer}
              setListContainer={setListContainer}
              setSelectedItem={setSelectedItem}/>
            <AddItem 
              listContainer={listContainer}
              setListContainer={setListContainer}
            />
          </div>
        </>
      }
    </div>
  );
}

export default App;
