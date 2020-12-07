import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ title, imageOne, imageTwo, price }) => {
	return (
		<Link className="product" to={"/item"}>
			<div tabIndex="0" className="product__image-wrapper">
				<div className="product__image-wrapper__image">
					<img
						className="product__img"
						src={imageOne}
						alt="first product"
					/>
				</div>
				<div className="product__image-wrapper__hover-image">
					<img
						className="product__img"
						src={imageTwo}
						alt="second product"
					/>
				</div>
			</div>
			<h3 className="product__h3 h3">{title}</h3>
			<p className="product__p p">
				{price}
				<small>€</small>
			</p>
		</Link>
	);
};

export default Product;
