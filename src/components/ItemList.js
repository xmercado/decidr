import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemList({ listContainer, setListContainer, selectedItem, setSelectedItem}) {
    const deleteItem = () => {
        setListContainer(listContainer.filter((value, index) => index !== selectedItem));
        setSelectedItem('');
    }

    const displayListContainer = listContainer.map((item, index) => (
        <div
            className='ListItem'
            key={index}
        >
            <p>
                {item}
            </p>
            <div 
                className='ListDelete'
                onClick={() => deleteItem()}
            >
                <DeleteIcon />
            </div>
        </div>
        )
    );

    return (
        <div className='List'>
            {displayListContainer}
        </div>
    );
}