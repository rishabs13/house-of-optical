import React from 'react'

import { CardMedia, Dialog, Fab, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  position: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
    
  }
})

function LandingPage() {

  const classes = useStyles()

  return (
   <div>

   <h1>Welcome to House of Optical</h1>
   <Button variant="contained" color="primary">
  Sign In
</Button>


   </div>
  );
};

export default LandingPage