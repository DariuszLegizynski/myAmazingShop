import React from "react";
import "./Product.css";

const Product = ({ title, imageOne, imageTwo, price }) => {
	return (
		<div className="product">
			<div className="product__image">
				<img src={imageOne} alt="first product" />
			</div>
			<div className="product__image">
				<img src={imageTwo} alt="first product" />
			</div>
			<h3 className="product__h3 h3">{title}</h3>
			<p className="product__p p">
				{price}
				<small>€</small>
			</p>
		</div>
	);
};

export default Product;
