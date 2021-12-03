import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import AddItem from './components/AddItem';
import SelectItem from './components/SelectItem';
import ItemList from './components/ItemList';
import ClearButton from './components/ClearButton';
import ClearModal from './components/ClearModal';
import Result from './components/Result';
import ItemCount from './components/ItemCount';

function App() {
  const [listContainer, setListContainer] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='App'>
      <Header />
      {
        selectedItem.length > 0
          ?
            <Result 
              listContainer={listContainer}
              setListContainer={setListContainer}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
            />
          :
            <>
              <ItemList
                listContainer={listContainer}
                setListContainer={setListContainer}
              />
              { showModal &&
                <ClearModal
                  setListContainer={setListContainer}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              }
              <div>
                <ItemCount
                  listContainer={listContainer}
                />
                { listContainer.length > 0 &&
                  <>
                    <SelectItem 
                      listContainer={listContainer}
                      setListContainer={setListContainer}
                      setSelectedItem={setSelectedItem}
                    />
                    <ClearButton
                      setShowModal={setShowModal}
                    />
                  </>
                }
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
