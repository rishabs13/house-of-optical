import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  INCREASE_QUANTITY,
  REDUCE_QUANTITY
} from '../actions/cart';

/**
 * The initial State for the store.
 */
const initialState = {
  total:0,
  items: []
};

/**
 * reducer for search order
 * @function reducer
 * @param {*} [state=initialState] - initial state
 * @param {*} action - actions for search order
 * @returns state - final state
 */
export default function cart(state = initialState, action) {
  const newState = { ...state};

  switch (action.type) {
    case ADD_TO_CART:
      const index = newState.items.findIndex(item => item.id == action.item.id)

      if(index > -1) {
        let oldItem = newState.items.splice(index, 1)[0]
        newState.items.push(Object.assign({}, oldItem, { quantity: oldItem.quantity + 1 }))

      } else {
        newState.items.push(action.item)
      }

      newState.total += action.item.price;
      return newState;

    case DELETE_FROM_CART:
      let total = 0

      newState.items = newState.items.filter(item => {
        total = item.id === action.id ? item.quantity * item.price : total
        return item.id !== action.id
      });

      newState.total -= total;

      return newState;

    case INCREASE_QUANTITY:
      newState.items = newState.items.map(item => {
        if(item.id === action.id) {
          newState.total += item.price
          return Object.assign({}, item, {quantity: item.quantity + 1})
        }
        return item
      })

      return newState

    case REDUCE_QUANTITY:
      newState.items = newState.items.map(item => {
        if(item.id === action.id && item.quantity > 1) {
          newState.total -= item.price
          return Object.assign({}, item, {quantity: item.quantity - 1})
        }
        return item
      })

      return newState

    default:
      return newState;
  }
}