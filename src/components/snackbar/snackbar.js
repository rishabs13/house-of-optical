
import React from 'react';
import { Snackbar } from '@material-ui/core';

function SnackBarComponent({
    open,
    message
}) {
    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
            open={open}
            autoHideDuration={6000}
            message={message}
        />
    );
}

export default SnackBarComponent;