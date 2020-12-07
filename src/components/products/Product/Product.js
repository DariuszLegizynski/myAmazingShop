import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ title, imageOne, imageTwo, price }) => {
	return (
		<div className="product">
			<Link to={"/item"} className="product__link link">
				<div className="product__link__image-wrapper">
					<div className="product__link__image-wrapper__image">
						<img
							className="product__img"
							src={imageOne}
							alt="first product"
						/>
					</div>
					<div className="product__link__image-wrapper__hover-image">
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
		</div>
	);
};

export default Product;
