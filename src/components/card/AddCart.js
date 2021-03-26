import React from 'react'
import { cart } from '../../common/constants'
import CartProd from './CartProd'
import '../cards/products.css'
import { total } from '../../common/constants'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


const AddCart = (product)=>{
        return(
            <div>
                <h2>Your Shopping Cart </h2>
                {cart.length === 0 ? <p>No item in cart.</p> : null}
                {
                    cart.map(product => {
                    return <CartProd product={product} />
                    })
                }
            
                {cart.length != 0? <h3>Total : ${total}</h3> : null}
                {cart.length != 0?  <div>
                    <Link to="/checkout">
                        <Button variant="contained" color="secondary">Checkout</Button> 
                    </Link>
                </div>: null}
            </div>
            
        );
    }
  


export default AddCart;