import React from 'react';
import { Button } from '@material-ui/core';

export default function ClearButton({ setShowModal }) {
    return (
        <Button
            style={{marginLeft: 10}}
            id='back'
            onClick={() => setShowModal(true)}
            variant='contained'
            color='secondary'
        >
            Clear list
        </Button>
    );
}