import React from 'react';
import { useDispatch } from 'react-redux';
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
import { deleteFRomCart } from '../../redux/Actions/cartAction';


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
});


const CartProd = ({ product }) => {
  const  dispatch = useDispatch();
  const onRemove = (props) => {
    dispatch(deleteFRomCart(product))
  }

  const classes = useStyles();

  return (
    <div className="card" key={product.id}>
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
          <Button variant="outlined" onClick={() => onRemove(product)}>
            Remove
        </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default CartProd;
