import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

export default function AddItem({ listContainer, setListContainer }) {
    const [newItem, setNewItem] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const addToList = () => {
        setListContainer([...listContainer, newItem]);
        setNewItem('');
        setAlertMessage('');
        setShowAlert(false);
    }

    const checkDuplicate = () => {
        const cleanInput = newItem.trim().toLowerCase();
        if (listContainer.every((item) => item.toLowerCase() !== cleanInput)) {
            return true;
        }
        return false;
    }

    const verifyInput = (event) => {
        event.preventDefault();
        if (!(newItem.length > 0) || !(/\S/.test(newItem))) {
            setShowAlert(true);
            setAlertMessage('Item cannot be empty.');
        }
        else if (!(checkDuplicate())) {
            setShowAlert(true);
            setAlertMessage('Item already exists.');
        }
        else addToList();
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
                    onClick={(event) => verifyInput(event)}
                    variant='contained'
                    color='secondary'
                >
                    Add Item
                </Button>
            </div>
            {
            showAlert &&
            <Alert 
                style={{margin: 10}}
                severity='error' 
            >
                <AlertTitle>
                    <strong>
                        Invalid Input
                    </strong>
                </AlertTitle>
                {alertMessage}
            </Alert>
            }
        </form>
    );
}