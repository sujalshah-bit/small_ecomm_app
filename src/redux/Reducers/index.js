import { combineReducers } from "redux";
import { addToCartReducer, productReducer, selectedProductReducer } from "./ProductReducers";

export const reducers = combineReducers(
    {
        allProducts:productReducer,
        selectedProduct:selectedProductReducer,
        cart:addToCartReducer
    }
)