import { useReducer } from "react";
// import { db } from "../../firebase/firebase";
import BasketContext from "./basketContext";
import basketReducer from "./basketReducer";
import {
	ADD_TO_BASKET,
	// SET_LOADING
} from "../types";

const BasketState = (props) => {
	const initialState = {
		basket: [],
		loading: false,
	};

	const [state, dispatch] = useReducer(
		basketReducer,
		initialState
	);

	const storeBasket = (
		itemId,
		thumbnailImageOne,
		itemTitle,
		itemPrice
	) => {
		dispatch({
			type: ADD_TO_BASKET,
			payload: {
				id: itemId,
				title: itemTitle,
				price: itemPrice,
				thumbnail: thumbnailImageOne,
			},
		});
	};

	return (
		<BasketContext.Provider
			value={{
				basket: state.basket,
				loading: state.loading,
				storeBasket,
			}}
		>
			{props.children}
		</BasketContext.Provider>
	);
};

export default BasketState;
