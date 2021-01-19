import React from "react";

//components
import ItemInBasket from "../itemInBasket/ItemInBasket";

//tools
import moment from "moment";
import shortid from "shortid";

import "./Order.css";

const Order = ({ order }) => {
	console.log(order);
	return (
		<section className="order">
			<h2 className="orders__h2 h2">Order</h2>
			<p>
				{moment
					.unix(order.data.created)
					.format("MMMM Do YYYY, h:mma")}
			</p>
			<p className="order__id">
				<small>{order.id}</small>
			</p>
			{order.data.basket?.map((item) => {
				return (
					<ItemInBasket
						key={shortid.generate()}
						thumbnail={item.thumbnail}
						title={item.title}
						price={item.price}
						articleId={item.articleId}
						quantity={item.quantity}
						hidebtn
					/>
				);
			})}
		</section>
	);
};

export default Order;
