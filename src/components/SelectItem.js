import React from 'react';
import { Button } from '@material-ui/core';

export default function SelectItem({ listContainer, setSelectedItem }) {
    const selectRandomItem = () => {
        const random = Math.floor(Math.random() * listContainer.length);
        setSelectedItem(listContainer[random]);
    }

    return (
        <>
        {
            listContainer.length < 2
            ?
                <Button
                className='Button'
                id='select-item'
                variant='outlined'
                color='primary'
                >
                    Decide!
                </Button>
            :
                <Button
                    className='Button'
                    id='select-item'
                    onClick={selectRandomItem}
                    variant='contained'
                    color='primary'
                >
                    Decide!
                </Button>
        }
        </>
    );
}