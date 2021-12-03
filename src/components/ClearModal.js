import React from 'react';
import { Button } from '@material-ui/core';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';

export default function ClearModal({ setListContainer, showModal, setShowModal}) {
    const clearList = () => {
        setListContainer([]);
        setShowModal(false);
    }

    return (
        <Modal
            className='Modal'
            open={showModal}
            onClose={() => setShowModal(false)}
        >
            <Box className='ModalBox'>
                <p>Clear list?</p>
                <Button
                    onClick={() => clearList()}
                    color='primary'
                >
                    Yes
                </Button>
                <Button
                    onClick={() => setShowModal(false)}
                >
                    No
                </Button>
            </Box>
        </Modal>
    );
}
