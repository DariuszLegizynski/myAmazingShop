import React, { useContext } from "react";

import BasketContext from "../../context/basket/basketContext";
import AuthContext from "../../context/auth/authContext";

import Product from "../../components/products/Product/Product";

import _ from "lodash";

const Payment = () => {
	const { basket } = useContext(BasketContext);
	const { user } = useContext(AuthContext);

	const checkBasket = () => {
		if (!_.isEmpty(basket)) {
			return basket.map((el) => {
				return (
					<Product
						key={el.id}
						title={el.title}
						price={el.price}
						imageOne={el.thumbnailImageOne}
						imageTwo={el.thumbnailImageTwo}
						articleId={el.id}
					/>
				);
			});
		}
	};

	return (
		<section className="payment">
			<div className="payment__container">
				<div className="payment__title">
					<h3>Delivery Address</h3>
				</div>
				<div className="payment__address">
					<p>{user?.email}</p>
					<p>Lightstreet 42</p>
					<p>2700 Narnia, AT</p>
				</div>
			</div>
			<div className="payment__container">
				<div className="payment__title">
					<h3>Review items and delivery</h3>
				</div>
				<div className="payment__items">
					<h3>Delivery Address</h3>
				</div>
			</div>
			<div className="payment__conatiner">
				{checkBasket}
			</div>
		</section>
	);
};

export default Payment;
