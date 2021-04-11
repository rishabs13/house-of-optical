import React from 'react'
import { useSelector } from 'react-redux';
import { cart } from '../../common/constants'
import CartProd from './CartProd'
import '../cards/products.css'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';



const AddCart = (product) => {
    const cartData = useSelector(state => {
        if (state.cartReducer) {
            return state.cartReducer
        }
        return [];
    }
    );
    return (
        <div style={{
            minWidth: "500px",
            height: '80vh',
            display: 'flex',
            padding: '5%',
            flexDirection: 'column',
            alignItems: 'center'
            }}>
            <h1>Your Shopping Cart </h1>
            {cartData.cartItems.length === 0 ? <p style={{ fontSize: '20px' }}>No item in cart.</p> : null}
            {
                cartData.cartItems.map(product => {
                    return <CartProd product={product} />
                })
            }

            <div style={{
                position: "absolute",
                bottom: "35px",
                height: "10%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: '90%',
                alignItems: 'center'
            }}>
                {cartData.cartItems.length !== 0 ? <h3>Total : ${cartData.cartPrice}</h3> : null}
            {cartData.cartItems.length !== 0 ? <div style={{ width : '100%'}}>
                <Link to="/checkout" style={{ outline: 'none'}}>
                    <Button variant="contained" style={{width : '100%'}} color="secondary">Checkout</Button>
                </Link>
            </div>
                : null
            }
        </div>
    </div >

        );
    }



export default AddCart;