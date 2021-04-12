import React,{useRef} from 'react';
import ReactDOM from "react-dom";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paypal from './paypal';

export default function PaymentForm() {
  return(
  <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <Paypal  align="center" />
        </Grid>
        <Grid item xs={12} md={6}>
          
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
 
}