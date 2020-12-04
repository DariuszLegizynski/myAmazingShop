import React, { useContext } from "react";

import Product from "./Product";

import ProductsContext from "../../context/products/productsContext";

import _ from "lodash";

const Productlist = () => {
	const { products } = useContext(ProductsContext);

	const showData = () => {
		if (!_.isEmpty(products)) {
			console.log(products);
			return products.map((el) => {
				return (
					<React.Fragment>
						<Product
							title={el.title}
							subtitle={el.subtitle}
							description={el.description}
							imageOne={el.thumbnailImageOne}
						/>
					</React.Fragment>
				);
			});
		}
	};

	return (
		<section className="products">
			<h2 className="products_h2 h2">Our Poducts</h2>
			{showData()}
		</section>
	);
};

export default Productlist;
