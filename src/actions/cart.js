export const ADD_TO_CART = "ADD_TO_CART";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const REDUCE_QUANTITY = "REDUCE_QUANTITY";

function addItem(item) {
  return {
    type: ADD_TO_CART,
    item
  }
}

function removeItem(id) {
  return {
    type: DELETE_FROM_CART,
    id
  }
}

function increaseItem(id) {
  return {
    type: INCREASE_QUANTITY,
    id
  }
}

function reduceItem(id) {
  return {
    type: REDUCE_QUANTITY,
    id
  }
}

export function addToCart(item) {
  return (dispatch) => {
    dispatch(addItem(item))
  }
}

export function removeFromCart(id) {
  return (dispatch) => {
    dispatch(removeItem(id))
  }
}

export function increaseItemQuantity(id) {
  return (dispatch) => {
    dispatch(increaseItem(id))
  }
}

export function reduceItemQuantity(id) {
  return (dispatch) => {
    dispatch(reduceItem(id))
  }
}