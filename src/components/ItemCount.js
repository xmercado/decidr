import React from 'react';

export default function ItemCount({ listContainer }) {
    return (
        <p>
            {listContainer.length}
            {
            listContainer.length === 1
            ?
                ' item in list'
            :
                ' items in list'
            }
        </p>
    );
}