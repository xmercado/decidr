import React from "react";
import { Button } from '@material-ui/core';

export default function SelectItem({ listContainer, setListContainer, setSelectedItem }) {
    const selectRandomItem = () => {
        const random = Math.floor(Math.random() * listContainer.length);
        setSelectedItem(listContainer[random]);
    }

    return (
        <div className='Pink'>
            <Button
                id='select-item'
                onClick={selectRandomItem}
            >
                Decide!
            </Button>
        </div>

    );
}