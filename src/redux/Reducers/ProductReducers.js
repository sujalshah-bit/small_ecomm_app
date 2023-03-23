import { ActionTypes } from "../Constants/action-types";

const intialState = { 
    Products:[]
}
const cart = {
    items:[],
    count:0
}

export const productReducer = (state=intialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCT:
            return {...state, Products:payload}
    
        default:
            return state;
    }
}
export const selectedProductReducer = (state={}, {type, payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default:
            return state;
    }
}
export const addToCartReducer = (state=cart, {type, payload})=>{
    switch (type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                items:[...state.items, payload],
                count:state.count + 1
            }
        case ActionTypes.REMOVE_FROM_CART:
            const indexItem = state.items.findIndex((item)=>item.id === payload )
            state.items.splice(indexItem,1)
            return {
                ...state,
                items:[...state.items],
                count:state.count - 1
            }
        default:
            return state;
    }
}


