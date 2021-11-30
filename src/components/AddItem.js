import React, { useState } from "react";

export default function AddItem({ listContainer, setListContainer }) {
    const [newItem, setNewItem] = useState('');

    const addItemToListContainer = (event) => {
        event.preventDefault();
        setListContainer([...listContainer, newItem]);
        setNewItem('');
    }

    return (
        <form>
            <input 
                id='add-item'
                placeholder={'Add Item'}
                value={newItem} 
                onChange={event => setNewItem(event.target.value)}
            />
            <button
                id='submit-item'
                type='submit'
                onClick={addItemToListContainer}
            >
                Add Item
            </button>
        </form>
    );
}