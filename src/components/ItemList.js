import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ItemList({ listContainer, setListContainer}) {
    const deleteItem = (i) => {
        setListContainer(listContainer.filter((value, index) => index !== i));
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
                    onClick={() => deleteItem(index)}
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