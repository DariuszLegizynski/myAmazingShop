import React, { useContext } from "react";
import { Link } from "react-router-dom";
import basketContext from "../../context/basket/basketContext";
import shortid from "shortid";

import icon from "../../resources/icons/icomoon/sprites.svg";

import "./ItemInBasket.css";

const ItemInbasket = ({
	thumbnail,
	title,
	price,
	articleId,
	quantity,
}) => {
	const {
		removeArticleFromBasket,
		removeItemFromBasket,
		addItemToBasket,
	} = useContext(basketContext);

	return (
		<div className="basket-item" key={shortid.generate()}>
			<Link className="basket-item__link link" to={"/"}>
				<img
					className="basket-item__container__image"
					src={thumbnail}
					alt="product's thumbnail"
				/>
			</Link>
			<div className="basket-item__text">
				<div className="basket-item__text__up">
					<Link
						className="basket-item__text__up__link"
						to={"/"}
					>
						<p className="basket-item__text__up__link__title p">
							{title}
						</p>
					</Link>
					<p className="basket-item__text__up__price p">
						<small className="basket-item__text__up__price__currency">
							€
						</small>
						{price}
					</p>
				</div>
				<div className="basket-item__text__controls">
					<div className="basket-item__text__controls__quantity">
						<p className="basket-item__text__controls__quantity__p p">
							qty:
						</p>
						<button
							className="basket-item__text__controls__quantity__btn btn"
							onClick={() =>
								removeItemFromBasket(articleId)
							}
						>
							<svg className="basket-item__text__controls__quantity__btn__icon icon">
								<use
									href={
										icon +
										"#icon-minus-circle"
									}
								/>
							</svg>
						</button>
						<span className="basket-item__text__controls__quantity__content">
							{quantity}
						</span>
						<button
							className="basket-item__text__controls__quantity__btn btn"
							onClick={() =>
								addItemToBasket(articleId)
							}
						>
							<svg className="basket-item__text__controls__quantity__btn__icon icon">
								<use
									href={
										icon +
										"#icon-plus-circle"
									}
								/>
							</svg>
						</button>
					</div>
					<button
						className="basket-item__text__controls__btn btn"
						onClick={() =>
							removeArticleFromBasket(articleId)
						}
					>
						Remove
					</button>
				</div>
			</div>
		</div>
	);
};

export default ItemInbasket;
