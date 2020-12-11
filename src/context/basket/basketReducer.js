import { ADD_TO_BASKET, SET_BASKET_LOADING } from "../types";

const basketReducer = (state, action) => {
	switch (action.type) {
		case SET_BASKET_LOADING:
			return {
				...state,
				loading: true,
			};
		case ADD_TO_BASKET:
			return {
				...state,
				basket: [...state.basket, action.payload],
				loading: false,
			};
		default:
			return state;
	}
};

export default basketReducer;
