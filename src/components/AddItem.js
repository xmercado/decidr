import React, { useState } from "react";
import { Button, TextField } from '@material-ui/core';

export default function AddItem({ listContainer, setListContainer }) {
    const [newItem, setNewItem] = useState('');

    const addItemToListContainer = (event) => {
        event.preventDefault();
        setListContainer([...listContainer, newItem]);
        setNewItem('');
    }

    return (
        <form>
            <div className='AddItem'>
                <div className='AddItemInput'>
                    <TextField 
                        id='add-item'
                        placeholder={'Add Item'}
                        value={newItem} 
                        onChange={event => setNewItem(event.target.value)}
                        variant='outlined'
                        color='primary'
                    />
                </div>
                <Button
                    className='Button'
                    id='submit-item'
                    type='submit'
                    onClick={addItemToListContainer}
                    variant='contained'
                    color='secondary'
                >
                    Add Item
                </Button>
            </div>
        </form>
    );
}