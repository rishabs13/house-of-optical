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
            <h1 style={{
                boxShadow: 'inset 0 -1px 0 0 rgba(0, 0, 0, 0.12)',
                paddingBottom: '10px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>Your Shopping Cart </h1>
            {cartData.cartItems.length === 0 ? <p style={{ fontSize: '20px' }}>No item in cart.</p> : null}
            {
                <div style={{marginTop: '10px',height: '85vh', overflow :'auto'}}>
                {cartData.cartItems.map(product => {
                    return <CartProd product={product} />
                })}
                </div>
            }

            <div style={{
                position: "absolute",
                bottom: "30px",
                height: "10%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                width: '90%',
                alignItems: 'center',
                boxShadow: 'inset 0 1px 0 0 rgba(0, 0, 0, 0.12)'
            }}>
                {cartData.cartItems.length !== 0 ? <h3>Total : ${cartData.cartPrice}</h3>  : null}
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