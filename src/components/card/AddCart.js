import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import CartProd from './CartProd'
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  main: {
    padding: '24px 16px'
  }
})

const AddCart = (props) => {
  const classes = useStyles()
  const { cart } = props
  const { items, total } = cart

  return(
    <div className={classes.main}>
      <h2>Your Shopping Cart </h2>
      {items.length === 0 ? <p>No item in cart.</p> : null}

      {
        items.map(product => (
          <CartProd product={product} key={product.id} />
        ))
      }

      {
        items.length != 0
          ? (
            <React.Fragment>
              <h3>Total : ${total}</h3>
              <Button component={Link} to='/checkout' variant="contained" color="secondary">Checkout</Button>
            </React.Fragment>
            )
          : null
      }
    </div>
  );
}

export default connect((state) => ({
  cart: state.cart
}))(AddCart);