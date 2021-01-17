import React, { useContext, useState } from "react";

//Context
import BasketContext from "../../context/basket/basketContext";
import AuthContext from "../../context/auth/authContext";

//Component
import ItemInBasket from "../../components/itemInBasket/ItemInBasket";

//Tools
import _ from "lodash";
import { Link } from "react-router-dom";
import {
	CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";

//styles
import "./Payment.css";

const Payment = () => {
	const { basket } = useContext(BasketContext);
	const { user } = useContext(AuthContext);

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [processing, setProcessing] = useState("");
	const [succeeded, setSucceeded] = useState(false);

	const stripe = useStripe();
	const elements = useElements();

	const handleSubmit = (e) => {};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	const totalSum = () => {
		return basket.reduce(
			(sum, { price, quantity }) => sum + price * quantity,
			0
		);
	};

	const showItemsInBasket = () => {
		if (!_.isEmpty(basket)) {
			return basket.map((el) => {
				return (
					<ItemInBasket
						thumbnail={el.thumbnail}
						title={el.title}
						price={el.price}
						articleId={el.articleId}
						quantity={el.quantity}
					/>
				);
			});
		}
	};

	return (
		<section className="payment">
			<h2 className="h2">
				Checkout (
				<Link
					className="link--cart link"
					to={"/account"}
				>
					{basket?.length} items
				</Link>
				)
			</h2>
			<div className="payment__container">
				<div className="payment__top">
					<h3 className="h3">Delivery Address</h3>
				</div>
				<div className="payment__bottom">
					<p className="p">{user?.email}</p>
					<p className="p">Lightstreet 42</p>
					<p className="p">2700 Narnia, AT</p>
				</div>
			</div>
			<div className="payment__container">
				<div className="payment__top">
					<h3 className="h3">
						Review items and delivery
					</h3>
				</div>
				<div className="payment__bottom">
					{showItemsInBasket()}
				</div>
			</div>
			<div className="payment__container">
				<div className="payment__top">
					<h3 className="h3">Payment Method</h3>
				</div>
				<div className="payment__bottom">
					<form onSubmit={handleSubmit}>
						<CardElement onChange={handleChange} />

						<div className="payment__price-container">
							<p className="p">
								Total:&nbsp;
								{totalSum()}
								<small>&nbsp;€</small>
							</p>
							<button
								disabled={
									processing ||
									disabled ||
									succeeded
								}
							>
								<span>
									{processing ? (
										<p>Processing</p>
									) : (
										"Buy Now"
									)}
								</span>
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Payment;
