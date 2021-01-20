import React, { useContext } from "react";

// tools
import _ from "lodash";
import { Link } from "react-router-dom";
import shortid from "shortid";
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

//context
import BasketContext from "../../context/basket/basketContext";
import AuthContext from "../../context/auth/authContext";

// styles
import "./Account.css";
import ItemInBasket from "../../components/itemInBasket/ItemInBasket";

const Account = () => {
	const { basket } = useContext(BasketContext);
	const { user } = useContext(AuthContext);

	const totalSum = () => {
		return basket.reduce(
			(sum, { price, quantity }) => sum + price * quantity,
			0
		);
	};

	const showItems = () => {
		if (!_.isEmpty(basket)) {
			return basket.map((el) => {
				return (
					<ItemInBasket
						key={shortid.generate()}
						thumbnail={el.thumbnail}
						title={el.title}
						price={el.price}
						articleId={el.articleId}
						quantity={el.quantity}
					/>
				);
			});
		} else {
			return (
				<div className="cart__empty-basket">
					<p>your basket is empty</p>
				</div>
			);
		}
	};

	return (
		<div className="cart fadeIn">
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
							<small>€</small>&nbsp;{totalSum()}
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
							<small>€</small>&nbsp;
							{totalSum() + 10}
						</h3>
					</div>
					<div className="cart__wrapper__order__price-summary price-summary--last-child">
						<p className="cart__wrapper__order__price-summary__item--p p">
							You have 14 days to return items,
							read more in our&nbsp;
							<Tooltip
								// options
								tabIndex="0"
								title="Not included in demo version"
								position="bottom"
								trigger="click"
								className="cart__wrapper__order__price-summary__item--p__link"
							>
								<span>
									return and refund policy.
								</span>
							</Tooltip>
						</p>
					</div>
					{!user && (
						<Link
							className="cart__wrapper__order__link"
							to={"/signIn"}
						>
							<button
								className="cart__wrapper__order__link__btn btn"
								tabIndex="-1"
							>
								Login
							</button>
						</Link>
					)}
					{user && (
						<Link
							className="cart__wrapper__order__link"
							to={"/payment"}
						>
							<button
								className="cart__wrapper__order__link__btn btn"
								tabIndex="-1"
								disabled={!user}
							>
								Checkout
							</button>
						</Link>
					)}
				</div>
			</div>

			<Link className="cart__back-link link" to={"/shop"}>
				Back to shop
			</Link>
		</div>
	);
};

export default Account;
