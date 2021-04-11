import React from 'react'

import { CardMedia, Dialog, Fab, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import Products from './cards/products'
import ImageC from './imageC/ImageC'
import Categories from './categories/categories';

const useStyles = makeStyles({
  fabPosition: {
    position: 'fixed',
    bottom: '16px',
    right: '16px'
  }
})

function LandingPage() {

  const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid container>
      <Grid item xs={12} >
        <ImageC />
      </Grid>

      <Grid item xs={12} >
        <Categories />
      </Grid>

      <Grid item xs={12} >
        <Products />
      </Grid>

      <Fab color='primary' className={classes.fabPosition} onClick={handleClickOpen}>
        <ContactSupportIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <CardMedia
          component='iframe'
          height='400'
          src='https://console.dialogflow.com/api-client/demo/embedded/278e3a62-1734-41ab-8e6c-e9fedb281111'
        />
      </Dialog>
    </Grid>
  );
};

export default LandingPage