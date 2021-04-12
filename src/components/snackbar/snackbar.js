
import React from 'react';
import { Snackbar } from '@material-ui/core';

function SnackBarComponent({
    open,
    message,
    onClose
}) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={1500}
            message={message}
            onClose={onClose}
        />
    );
}

export default SnackBarComponent;