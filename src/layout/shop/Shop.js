import React, { useContext } from "react";
import { Link } from "react-router-dom";

// styles
import "./Shop.css";

// tools
import _ from "lodash";
import shortid from "shortid";

// components
import Header from "../../components/header/Header";
import Shipment from "../../components/shipment/Shipment";
import Footer from "../../components/footer/Footer";
import Product from "../../components/products/Product/Product";

// context
import ProductsContext from "../../context/products/productsContext";

const Shop = () => {
	const { products } = useContext(ProductsContext);

	const showProducts = () => {
		if (!_.isEmpty(products)) {
			return products.map((el) => {
				return (
					<div
						className="shop__wrapper__items__card-container"
						key={shortid.generate()}
					>
						<Product
							articleId={el.id}
							title={el.title}
							price={el.price}
							imageOne={el.thumbnailImageOne}
							imageTwo={el.thumbnailImageTwo}
						/>
					</div>
				);
			});
		}
	};

	const showProductsLength = () => {
		if (!_.isEmpty(products)) {
			return (
				<p className="shop__wrapper__p p">
					{_.size(products)} articels found
				</p>
			);
		} else {
			return <p>loading...</p>;
		}
	};

	return (
		<section className="shop">
			<Header />
			<div className="shop__bg-image">
				<h1 className="shop__bg-image__h1 h1">
					All Products
				</h1>
			</div>
			<div className="shop__wrapper">
				{showProductsLength()}
				<div className="shop__wrapper__items">
					{showProducts()}
				</div>
			</div>
			<div className="shop__center-div">
				<Link
					className="shop__center-div__link link"
					to={"/"}
				>
					<h3 className="shop__center-div__link__h3 h3">
						&larr; Back
					</h3>
				</Link>
			</div>

			<Shipment />
			<Footer />
		</section>
	);
};

export default Shop;
