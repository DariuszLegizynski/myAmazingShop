import React, { useContext, useEffect, useState } from "react";

//Context
import BasketContext from "../../context/basket/basketContext";
import AuthContext from "../../context/auth/authContext";

//Component
import ItemInBasket from "../../components/itemInBasket/ItemInBasket";

//Tools
import _ from "lodash";
import { Link, useHistory } from "react-router-dom";
import {
	CardElement,
	useStripe,
	useElements,
} from "@stripe/react-stripe-js";
import axios from "../../axios/axios";
import shortid from "shortid";

//styles
import "./Payment.css";

const Payment = () => {
	const { basket } = useContext(BasketContext);
	const { user } = useContext(AuthContext);

	const [nameOnCard, setNameOnCard] = useState("");
	const [clientSecret, setClientSecret] = useState(true);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [succeeded, setSucceeded] = useState(false);
	const [disabled, setDisabled] = useState(true);

	const stripe = useStripe();
	const elements = useElements();

	const history = useHistory();

	const handleNameOnCard = (e) => {
		setNameOnCard(e.target.value);
	};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true); //to prevent the "Buy Now" btn beeing clicked multiple times

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				//paymentIntent === payment confirmation (stripe standard)

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				history.replace("/orders");
			});

		console.log(payload);
	};

	const totalSum = () => {
		return basket.reduce(
			(sum, { price, quantity }) => sum + price * quantity,
			0
		);
	};

	const totalPrice = totalSum();

	useEffect(() => {
		const getClientSecret = async () => {
			const res = await axios({
				method: "post",
				url: `/payment/create?totalAmount=${
					totalPrice * 100
				}`,
			});
			setClientSecret(res.data.clientSecret);
		};
		getClientSecret();
	}, [totalPrice]);

	const showItemsInBasket = () => {
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
						<div className="payment__name">
							<input
								name="nameOnCard"
								className="payment__input__field"
								type="text"
								value={nameOnCard}
								onChange={(e) =>
									handleNameOnCard(e)
								}
								placeholder="Card's owner name"
								required={true}
							/>
						</div>
						<CardElement onChange={handleChange} />

						<div className="payment__price-container">
							<p className="p">
								Total:&nbsp;
								{totalPrice}
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
						{error && <div>{error}</div>}
					</form>
				</div>
			</div>
			<Link
				className="cart__back-link link"
				to={"/account"}
			>
				Back to Basket
			</Link>
		</section>
	);
};

export default Payment;
