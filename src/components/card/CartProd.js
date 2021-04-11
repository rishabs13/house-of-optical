import React from 'react'
import { connect } from 'react-redux'
import {
  increaseItemQuantity,
  reduceItemQuantity,
  removeFromCart
} from '../../actions/cart'

import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import './product.css'

const useStyles = makeStyles({
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  root: {
    '& > *': {
      width: '15ch',
    }
  },
  cardActions: {
    justifyContent: 'space-between'
  }
})

const CartProd = ({ dispatch, product }) => {
  const classes = useStyles();

  const increaseQuantity = () => {
    dispatch(increaseItemQuantity(product.id))
  }

  const reduceQuantity = () => {
    dispatch(reduceItemQuantity(product.id))
  }

  const removeItem = () => {
    dispatch(removeFromCart(product.id))
  }

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
              {'$ ' + (product.price * product.quantity)}
            </Typography>
          </div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <ButtonGroup size="small">
            <Button variant="outlined" onClick={reduceQuantity}>
              -
            </Button>
            <Button disabled>
              {product.quantity}
            </Button>
            <Button variant="outlined" onClick={increaseQuantity}>
              +
            </Button>
          </ButtonGroup>

          <Button variant="outlined" color="secondary" size="small" onClick={removeItem}>
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default connect()(CartProd);