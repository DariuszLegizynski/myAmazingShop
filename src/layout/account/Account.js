import React, { useContext } from "react";

// tools
import _ from "lodash";
import shortid from "shortid";

//context
import BasketContext from "../../context/basket/basketContext";
import { Link } from "react-router-dom";

const Account = () => {
	const { basket } = useContext(BasketContext);
	console.log(basket);

	const showItems = () => {
		if (!_.isEmpty(basket)) {
			return basket.map((el) => {
				return (
					<div key={shortid.generate()}>
						<p>{el.id}</p>
						<p>{el.title}</p>
						<p>{el.price}</p>
						<img
							src={el.thumbnail}
							alt="product's thumbnail"
						/>
					</div>
				);
			});
		}
	};

	return (
		<div>
			<h3 className="h3">Products in the basket: </h3>
			{showItems()}
			<Link to={"/shop"}>Back to shop</Link>
		</div>
	);
};

export default Account;
