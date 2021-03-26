import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import './product.css'
import { cart } from '../../common/constants'
import TextField from '@material-ui/core/TextField';
import { total, setTotal } from '../../common/constants'
//import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  root: {
    '& > *': {
      width: '15ch',
    }
  }
})

/* Get installation details for current order */
// const cartDetails = useSelector(state =>
//   state.cartReducer
//     ? state.cartReducer :null
// );


const onRemove = (props) =>
    {
      setTotal(total - props.price);
      for( var i = 0; i < cart.length; i++){ 
                                   
        if ( cart[i] === props) { 
            cart.splice(i, 1); 
            i--; 
        }
        
    }
    }

    
    
const CartProd = ({ product}) => {


const classes = useStyles();
    

  return (
    <div className="card">
    <Card>
      <CardMedia
        component='img'
        image={product.imgUrl}
        alt={product.title}
        height={150}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${' '}{product.price}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
      <form className={classes.root} noValidate autoComplete="off">
    
      <TextField id="outlined-basic" label="Quantity" variant="outlined" defaultValue="1" />
    </form>
        <Button variant="outlined"  onClick= {()=> onRemove(product)}>
          Remove
        </Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default CartProd;
