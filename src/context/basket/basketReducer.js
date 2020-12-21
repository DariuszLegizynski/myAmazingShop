import _ from "lodash";

import {
	ADD_ARTICLE_TO_BASKET,
	ADD_ITEM_TO_BASKET,
	REMOVE_ITEM_FROM_BASKET,
	REMOVE_ARTICLE_FROM_BASKET,
} from "../types";

const checkIfArticleIsInBasket = (
	articlesInBasket,
	newArticleId
) => {
	if (_.isEmpty(articlesInBasket)) {
		return false;
	} else {
		return articlesInBasket.some(
			(el) => el.articleId === newArticleId
		);
	}
};

const incrementItem = (currentBasket, articleId) => {
	const tempBasket = [...currentBasket];
	const selectedItem = tempBasket.find(
		(el) => el.articleId === articleId
	);
	const index = tempBasket.indexOf(selectedItem);
	const item = tempBasket[index];

	item.quantity = item.quantity + 1;
	return tempBasket;
};

const decrementItem = (currentBasket, articleId) => {
	const tempBasket = [...currentBasket];
	const selectedItem = tempBasket.find(
		(el) => el.articleId === articleId
	);
	const index = tempBasket.indexOf(selectedItem);
	const item = tempBasket[index];

	item.quantity = item.quantity - 1;
	return tempBasket;
};

const basketReducer = (state, action) => {
	switch (action.type) {
		case ADD_ARTICLE_TO_BASKET:
			if (
				checkIfArticleIsInBasket(
					state.basket,
					action.payload.articleId
				)
			) {
				return state;
			} else {
				return {
					...state,
					basket: [...state.basket, action.payload],
				};
			}

		case ADD_ITEM_TO_BASKET:
			return {
				...state,
				basket: incrementItem(
					state.basket,
					action.payload.articleId
				),
			};

		case REMOVE_ITEM_FROM_BASKET:
			return {
				...state,
				basket: decrementItem(
					state.basket,
					action.payload.articleId
				),
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

		default:
			return state;
	}
};

export default basketReducer;
