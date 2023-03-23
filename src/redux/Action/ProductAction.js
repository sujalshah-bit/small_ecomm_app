import { ActionTypes } from "../Constants/action-types";

export const setProduct = (products) => {
    return{
        type:ActionTypes.SET_PRODUCT,
        payload:products,
    }
}
export const selectedProduct = (products) => {
    return{
        type:ActionTypes.SELECTED_PRODUCT,
        payload:products,
    }
}
export const removeSelectedProduct = () => {
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}
export const addToCart = (product) => {
    return{
        type:ActionTypes.ADD_TO_CART,
        payload:product,
    }
}
export const removeFromCart = (product) => {
    return{
        type:ActionTypes.REMOVE_FROM_CART,
        payload:product,
    }
}
