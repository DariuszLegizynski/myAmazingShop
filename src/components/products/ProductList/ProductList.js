import React, { useContext } from "react";
import _ from "lodash";

import "./ProductList.css";

//slick-slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// component
import Product from "../Product/Product";

import ProductsContext from "../../../context/products/productsContext";

const ProductList = () => {
	const { products } = useContext(ProductsContext);

	const settings = {
		dots: true,
		infinite: false,
		lazyLoad: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 0,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
					infinite: true,
					dots: true,
				},
			},
		],
	};

	const showData = () => {
		if (!_.isEmpty(products)) {
			return products.map((el) => {
				return (
					<Product
						key={el.id}
						title={el.title}
						price={el.price}
						imageOne={el.thumbnailImageOne}
						imageTwo={el.thumbnailImageTwo}
					/>
				);
			});
		}
	};

	return (
		<section className="products">
			<h2 className="products__h2 h2">Our Poducts</h2>
			<Slider {...settings}>{showData()}</Slider>
		</section>
	);
};

export default ProductList;
