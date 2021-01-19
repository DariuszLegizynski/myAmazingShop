import React, { useEffect, useContext, useState } from "react";
import { db } from "../../firebase/firebase";

import AuthContext from "../../context/auth/authContext";

import Order from "../../components/order/Order";

import { Link } from "react-router-dom";

import "./Orders.css";

const Orders = () => {
	const { user } = useContext(AuthContext);
	const [orders, setOrders] = useState([]);

	console.log(orders);

	useEffect(() => {
		if (user) {
			db.collection("users")
				.doc(user?.uid)
				.collection("orders")
				.orderBy("created", "desc")
				.onSnapshot((snapshot) =>
					setOrders(
						snapshot.docs.map((doc) => ({
							id: doc.id,
							data: doc.data(),
						}))
					)
				);
		} else {
			setOrders([]);
			console.log("hello");
		}
	}, [user]);

	return (
		<div className="orders">
			<h1 className="orders__h1 h1">Your Orders</h1>
			<div className="orders__container">
				{orders?.map((order) => {
					return <Order order={order} />;
				})}
			</div>
			<Link
				className="intro__title__white-bg__shop__link link"
				to={"/shop"}
			>
				<button className="btn--shop btn" tabIndex="-1">
					<span className="span">Shop</span>
				</button>
			</Link>
		</div>
	);
};

export default Orders;
