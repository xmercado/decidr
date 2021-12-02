import React from 'react';
import { Button } from '@material-ui/core';
import SelectItem from './SelectItem';

export default function Result({ listContainer, setListContainer, selectedItem, setSelectedItem }) {
    const clearState = () => {
        setListContainer([]);
        setSelectedItem('');
    }

    return (
        <div className='Result'>
              <p>Your decision is </p>
              <p>{selectedItem}</p>
              <SelectItem 
                  listContainer={listContainer}
                  setListContainer={setListContainer}
                  setSelectedItem={setSelectedItem}
                />
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
    );
}

