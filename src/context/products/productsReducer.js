import {
    SHOW_PRODUCTS,
    SET_LOADING
} from "../types";

const productsReducer = (state, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SHOW_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                loading: false
            }
        default:
            return state;
    }
}

export default productsReducer;