import React, { useEffect, useContext, useState } from "react";

import AuthContext from "../../context/auth/authContext";

// Components
import { db } from "../../firebase/firebase";
import Order from "../../components/order/Order";
import Header from "../../components/header/Header";

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
		<section className="fadeIn">
			<Header />
			<div className="orders">
				<h1 className="orders__h1 h1">Your Orders</h1>
				<div className="orders__container">
					{orders?.map((order) => {
						return <Order order={order} />;
					})}
				</div>
				<Link
					className="cart__back-link link"
					to={"/shop"}
				>
					Back to shop
				</Link>
			</div>
		</section>
	);
};

export default Orders;
