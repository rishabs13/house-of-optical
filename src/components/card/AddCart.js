import React from 'react'
import { Link } from 'react-router-dom';
import { cart, total } from '../../common/constants'
import CartProd from './CartProd'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  main: {
    padding: '24px 16px'
  }
})

const AddCart = () => {
  const classes = useStyles()

  return(
    <div className={classes.main}>
      <h2>Your Shopping Cart </h2>
      {cart.length === 0 ? <p>No item in cart.</p> : null}

      {
        cart.map(product => (
          <CartProd product={product} />
        ))
      }

      {cart.length != 0? <h3>Total : ${total}</h3> : null}

      {cart.length != 0
        ? <Button component={Link} to='/checkout' variant="contained" color="secondary">Checkout</Button>
        : null}
    </div>
  );
}

export default AddCart;