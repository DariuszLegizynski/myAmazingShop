import { useContext } from "react";
import { Link } from "react-router-dom";

//components
import Header from "../../components/header/Header";

//tools
import _ from "lodash";
import shortid from "shortid";

//context
import ProductsContext from "../../context/products/productsContext";
import BasketContext from "../../context/basket/basketContext";

//styles
import "./Item.css";

export const Item = (props) => {
	const { products } = useContext(ProductsContext);
	const {
		addArticleToBasket,
		removeArticleFromBasket,
	} = useContext(BasketContext);

	const articleId = props.location.pathname.substring(1);

	let selectedItem = [];

	if (!_.isEmpty(products)) {
		selectedItem = [
			products.find((el) => el.id === articleId),
		];
	}

	const showData = () => {
		if (!_.isEmpty(selectedItem)) {
			return selectedItem.map((el) => {
				return (
					<div
						className="item__wrapper__container"
						key={shortid.generate()}
					>
						<div className="item__wrapper__container__images">
							<div className="item__wrapper__container__images__big-ones">
								<div className="item__wrapper__container__images__big-ones__big">
									<img
										src={el.imageOne}
										alt="big-one"
									/>
								</div>
								<div className="item__wrapper__container__images__big-ones__big">
									<img
										src={el.imageTwo}
										alt="big-two"
									/>
								</div>
								<div className="item__wrapper__container__images__big-ones__big">
									<img
										src={el.imageThree}
										alt="big-three"
									/>
								</div>
							</div>
							<div className="item__wrapper__container__images__small-ones">
								<div className="item__wrapper__container__images__small-ones__small">
									<img
										src={
											el.thumbnailImageOne
										}
										alt="thumbnail-one"
									/>
								</div>
								<div className="item__wrapper__container__images__small-ones__small">
									<img
										src={
											el.thumbnailImageTwo
										}
										alt="thumbnail-two"
									/>
								</div>
								<div className="item__wrapper__container__images__small-ones__small">
									<img
										src={
											el.thumbnailImageThree
										}
										alt="thumbnail-three"
									/>
								</div>
							</div>
						</div>
						<div className="item__wrapper__container__text">
							<div className="item__wrapper__container__text__content">
								<div className="item__wrapper__container__text__content__titles">
									<h1 className="item__wrapper__container__text__content__titles__h1 h1">
										{el.title}
									</h1>
									<h3 className="item__wrapper__container__text__content__titles__h3 h3">
										{el.subtitle}
									</h3>
								</div>
								<p className="item__wrapper__container__text__content__p p">
									{el.description}
								</p>
								<p className="item__wrapper__container__text__content__price p">
									{el.price}
									<small className="item__wrapper__container__text__content__currency">
										€
									</small>
								</p>
							</div>
							<div className="cart__wrapper__column__basket__text__controls__quantity--item">
								<button
									onClick={() =>
										addArticleToBasket(
											el.id,
											el.title,
											el.price,
											el.thumbnailImageOne,
											el.thumbnailImageTwo
										)
									}
									className="shop__wrapper__items__card-container__btn btn"
								>
									Add to basket
								</button>
								<button
									className="cart__wrapper__column__basket__text__controls__btn btn"
									onClick={() =>
										removeArticleFromBasket(
											el.id
										)
									}
								>
									Remove
								</button>
							</div>
						</div>
					</div>
				);
			});
		} else {
			return (
				<p className="item__loading loading">
					Loading...
				</p>
			);
		}
	};

	return (
		<>
			<Header />
			<section className="item">
				<div className="item__wrapper">{showData()}</div>
				<div className="item__link-wrapper">
					<Link
						className="item__link-wrapper__link link"
						to={"/"}
					>
						&larr; BACK
					</Link>
				</div>
			</section>
		</>
	);
};

export default Item;
