import React, { useState } from "react";
import { useSelector } from 'react-redux';
import ReactDOM from "react-dom";
import Typography from '@material-ui/core/Typography';


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


export default function Paypal() {
  const cartData = useSelector(state => {
    if (state.cartReducer) {
        return state.cartReducer
    }
    return [];
}
);

  const price = cartData.cartPrice;

  const createOrder = (data, actions) =>{
    return actions.order.create({
      purchase_units: [{
        amount: {
            value: price,
            currency_code: "CAD"
        }
    }],
    });
  };



  const onApprove = (data, actions) => {
    return actions.order.capture({

    });
  } 

  return (
    <div>
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
    />
    </div>
  );
}

