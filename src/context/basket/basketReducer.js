import {
	ADD_TO_BASKET,
	REMOVE_ITEM_FROM_BASKET,
	REMOVE_ARTICLE_FROM_BASKET,
} from "../types";

const basketReducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_BASKET:
			return {
				...state,
				basket: [...state.basket, action.payload],
			};
		case REMOVE_ARTICLE_FROM_BASKET:
			return {
				...state,
				basket: [
					...state.basket.filter(
						(el) =>
							el.articleId !==
							action.payload.articleId
					),
				],
			};
		case REMOVE_ITEM_FROM_BASKET:
			return {
				...state,
				basket: [
					...state.basket.filter(
						(el) => el.id !== action.payload.id
					),
				],
			};

		default:
			return state;
	}
};

export default basketReducer;
