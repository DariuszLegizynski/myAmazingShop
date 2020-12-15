import React, { useContext } from "react";

// tools
import _ from "lodash";
import shortid from "shortid";

//context
import BasketContext from "../../context/basket/basketContext";
import { Link } from "react-router-dom";

// styles
import "./Account.css";
import icon from "../../resources/icons/icomoon/sprites.svg";

const Account = () => {
	const {
		basket,
		removeArticleFromBasket,
		removeItemFromBasket,
	} = useContext(BasketContext);

	if (!_.isEmpty(basket)) {
		console.log(_.uniqBy(basket, "articleId"));
	}

	const showItems = () => {
		if (!_.isEmpty(basket)) {
			return _.uniqBy(basket, "articleId").map((el) => {
				return (
					<div
						className="cart__wrapper__column__basket"
						key={shortid.generate()}
					>
						<Link
							className="cart__wrapper__column__basket__link link"
							to={"/"}
						>
							<img
								className="cart__wrapper__column__basket__container__image"
								src={el.thumbnail}
								alt="product's thumbnail"
							/>
						</Link>
						<div className="cart__wrapper__column__basket__text">
							<div className="cart__wrapper__column__basket__text__up">
								<Link
									className="cart__wrapper__column__basket__text__up__link"
									to={"/"}
								>
									<p className="cart__wrapper__column__basket__text__up__link__title p">
										{el.title}
									</p>
								</Link>
								<p className="cart__wrapper__column__basket__text__up__price p">
									<small className="cart__wrapper__column__basket__text__up__price__currency">
										€
									</small>
									{el.price}
								</p>
							</div>
							<div className="cart__wrapper__column__basket__text__controls">
								<div className="cart__wrapper__column__basket__text__controls__quantity">
									<p className="cart__wrapper__column__basket__text__controls__quantity__p p">
										qty:
									</p>
									<button
										className="cart__wrapper__column__basket__text__controls__quantity__btn btn"
										onClick={() =>
											removeItemFromBasket(
												el.id
											)
										}
									>
										<svg className="cart__wrapper__column__basket__text__controls__quantity__btn__icon icon">
											<use
												href={
													icon +
													"#icon-minus-circle"
												}
											/>
										</svg>
									</button>
									<span className="cart__wrapper__column__basket__text__controls__quantity__content">
										4
									</span>
									<button className="cart__wrapper__column__basket__text__controls__quantity__btn btn">
										<svg className="cart__wrapper__column__basket__text__controls__quantity__btn__icon icon">
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
									className="cart__wrapper__column__basket__text__controls__btn btn"
									onClick={() =>
										removeArticleFromBasket(
											el.articleId
										)
									}
								>
									Remove
								</button>
							</div>
						</div>
					</div>
				);
			});
		} else {
			return (
				<div>
					<p>your basket is empty</p>
					<Link to={"/shop"}>Back to shop</Link>
				</div>
			);
		}
	};

	return (
		<div className="cart">
			<h1 className="cart__h1 h1">Cart</h1>
			<div className="cart__wrapper">
				<div className="cart__wrapper__column">
					<h2 className="cart__wrapper__column__h2 h2">
						Items
					</h2>
					{showItems()}
				</div>
				<div className="cart__wrapper__order">
					<h2 className="cart__wrapper__order__h2 h2">
						Order summary
					</h2>
					<div className="cart__wrapper__order__price-summary">
						<p className="cart__wrapper__order__price-summary__p p">
							Order value
						</p>
						<h3 className="cart__wrapper__order__price-summary__item h3">
							<small>€</small>&nbsp;560
						</h3>
					</div>
					<div className="cart__wrapper__order__price-summary">
						<p className="cart__wrapper__order__price-summary__p p">
							Shipping
						</p>
						<h3 className="cart__wrapper__order__price-summary__item h3">
							<small>€</small>&nbsp;10
						</h3>
					</div>
					<div className="cart__wrapper__order__price-summary">
						<p className="cart__wrapper__order__price-summary__p p">
							Total
						</p>
						<h3 className="cart__wrapper__order__price-summary__item--total h3">
							<small>€</small>&nbsp;570
						</h3>
					</div>
					<div className="cart__wrapper__order__price-summary price-summary--last-child">
						<p className="cart__wrapper__order__price-summary__item--p p">
							You have 14 days to return items,
							read more in our&nbsp;
							<Link
								className="cart__wrapper__order__price-summary__item--p__link link"
								to={"/"}
							>
								return and refund policy.
							</Link>
						</p>
					</div>
					<Link
						className="cart__wrapper__order__link"
						to={"/"}
					>
						<button
							className="cart__wrapper__order__link__btn btn"
							tabIndex="-1"
						>
							Checkout
						</button>
					</Link>
				</div>
			</div>

			<Link to={"/shop"}>Back to shop</Link>
		</div>
	);
};

export default Account;
