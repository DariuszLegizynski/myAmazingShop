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
import ItemGallery from "../../components/itemGallery/ItemGallery";

export const Item = (props) => {
	const { products } = useContext(ProductsContext);
	const {
		addArticleToBasket,
		removeArticleFromBasket,
	} = useContext(BasketContext);

	const articleId = props.match.params.item;

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
						<ItemGallery
							imageOneBig={el.imageOne}
							imageTwoBig={el.imageTwo}
							imageThreeBig={el.imageThree}
							imageOneSmall={el.thumbnailImageOne}
							imageTwoSmall={el.thumbnailImageTwo}
							imageThreeSmall={
								el.thumbnailImageThree
							}
						/>
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
											el.thumbnailImageOne,
											el.title,
											el.price
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
									Remove from basket
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
