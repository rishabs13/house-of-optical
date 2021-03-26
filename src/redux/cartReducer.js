
  import {
    ADD_TO_CART,
    DELETE_FROM_CART
  } from './ActionType';
  
  /**
   * The initial State for the store.
   */
  const initialState = {
    cartPrice:0,
    cartItems: []
};
        /**
 * reducer for search order
 * @function reducer
 * @param {*} [state=initialState] - initial state
 * @param {*} action - actions for search order
 * @returns state - final state
 */
export function cartReducer(state = initialState, action) {
    const newState = { ...state};
    switch (action.type) {
      case ADD_TO_CART:
        newState.cartItems.push(action.payload);
        newState.cartPrice += action.payload.price;
        return newState;
        case DELETE_FROM_CART:
        newState.cartPrice -= action.payload.price;

    const newArray = newState.cartItems.filter(item => item.id !== action.payload.id);
       newState.cartItems = newArray;

            return newState;
        default:
            return newState;
    }
} 
