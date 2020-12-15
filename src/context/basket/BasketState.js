import { useReducer } from "react";
import BasketContext from "./basketContext";
import basketReducer from "./basketReducer";
import {
	ADD_TO_BASKET,
	REMOVE_ITEM_FROM_BASKET,
	REMOVE_ARTICLE_FROM_BASKET,
} from "../types";

const BasketState = (props) => {
	const initialState = {
		basket: [],
	};

	const [state, dispatch] = useReducer(
		basketReducer,
		initialState
	);

	const storeBasket = (
		itemId,
		articleId,
		thumbnailImageOne,
		itemTitle,
		itemPrice
	) => {
		dispatch({
			type: ADD_TO_BASKET,
			payload: {
				id: itemId,
				articleId: articleId,
				title: itemTitle,
				price: itemPrice,
				thumbnail: thumbnailImageOne,
			},
		});
	};

	const removeItemFromBasket = (itemId) => {
		dispatch({
			type: REMOVE_ITEM_FROM_BASKET,
			payload: { id: itemId },
		});
	};

	const removeArticleFromBasket = (articleId) => {
		dispatch({
			type: REMOVE_ARTICLE_FROM_BASKET,
			payload: { articleId: articleId },
		});
	};

	return (
		<BasketContext.Provider
			value={{
				basket: state.basket,
				loading: state.loading,
				storeBasket,
				removeItemFromBasket,
				removeArticleFromBasket,
			}}
		>
			{props.children}
		</BasketContext.Provider>
	);
};

export default BasketState;
