import React, { useContext } from "react";
import _ from "lodash";

//styles
import "./ProductList.css";
import iconSprites from "../../../resources/icons/icomoon/sprites.svg";

//slick-slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// components
import Product from "../Product/Product";
import CarouselArrow from "../../carousel/CarouselArrow";

//context
import ProductsContext from "../../../context/products/productsContext";

const ProductList = () => {
	const { products } = useContext(ProductsContext);

	const carouselArrowLeft =
		iconSprites + "#icon-chevron-circle-left";
	const carouselArrowRight =
		iconSprites + "#icon-chevron-circle-right";

	const settings = {
		arrows: true,
		dots: true,
		infinite: false,
		initialSlide: 0,
		lazyLoad: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 500,
		swipeToSlide: true,
		nextArrow: <CarouselArrow icon={carouselArrowRight} />,
		prevArrow: <CarouselArrow icon={carouselArrowLeft} />,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 900,

				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 0,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 700,

				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 0,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 601,
				settings: "slick",
			},
			{
				breakpoint: 600,
				settings: "unslick",
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
						articleId={el.id}
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
