import React, { useContext } from "react";

// tools
import _ from "lodash";
import shortid from "shortid";

//context
import BasketContext from "../../context/basket/basketContext";
import { Link } from "react-router-dom";

const Account = () => {
	const { basket } = useContext(BasketContext);

	const showItems = () => {
		if (!_.isEmpty(basket)) {
			return basket.map((el) => {
				return (
					<div key={shortid.generate()}>
						<p>{el.title}</p>
						<p>{el.price}</p>
						<img
							src={el.thumbnail}
							alt="product's thumbnail"
						/>
					</div>
				);
			});
		}
	};

	return (
		<div className="cart">
			<h1 className="h3">Cart</h1>
			<div className="cart__wrapper">
				<div className="cart__wrapper__column">
					<h2 className="h2">Items</h2>
					{showItems()}
				</div>
				<div className="cart__wrapper__column">
					<h2 className="h2">Order summary</h2>
					<div className="cart__wrapper__column__price-summary">
						<h3 className="h3">Order value</h3>
						<p className="cart__wrapper__column__price-summary__item">
							<small>€</small>560
						</p>
					</div>
					<div className="cart__wrapper__column__price-summary">
						<h3 className="h3">Shipping</h3>
						<p className="cart__wrapper__column__price-summary__item">
							<small>€</small>10
						</p>
					</div>
					<div className="cart__wrapper__column__price-summary">
						<h3 className="h3">Total</h3>
						<p className="cart__wrapper__column__price-summary__item">
							<small>€</small>570
						</p>
					</div>
					<div className="cart__wrapper__column__price-summary">
						<p className="cart__wrapper__column__price-summary__item">
							You have 14 days to return items,
							read more in our&nbsp;
							<Link to={"/"}>
								return and refund policy.
							</Link>
						</p>
					</div>
				</div>
			</div>

			<Link to={"/shop"}>Back to shop</Link>
		</div>
	);
};

export default Account;
