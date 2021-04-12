import React, { useState } from "react";
import ReactDOM from "react-dom";
import Typography from '@material-ui/core/Typography';


const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Paypal() {

  const [price, setPrice] = useState(10);
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

//   const paypal =useRef();

//   useEffect(() => {
//     Window.paypal.Buttons({
//       createOrder: (data, actions) =>{
//         return actions.order.create({
//           intent: "CAPTURE", 
//           purchase_units: [
//             {
//               amount: {
//                 currency_code: "CAD",
//                 value: 100,
//               },
//             },
//           ],
//         });
//       },
//       onApprove: (data, actions) => {
//         return actions.order.capture();
//       }
//     }).render(paypal.current)
//   }, []);

//   return(

//     <div>
//       <div ref={paypal}></div>
//     </div>
//   )

  
// }

//export default Paypal