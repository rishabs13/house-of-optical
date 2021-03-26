import { ADD_TO_CART, DELETE_FROM_CART } from "../ActionType"

export const addToCart = (item) =>
{
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const deleteFRomCart = (itemId) =>
{
    return {
        type : DELETE_FROM_CART,
        payload: itemId
    }
}