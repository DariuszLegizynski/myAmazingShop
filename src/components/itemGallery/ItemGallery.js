import React from "react";

import "./ItemGallery.css";

const ItemGallery = ({
	imageOneBig,
	imageTwoBig,
	imageThreeBig,
	imageOneSmall,
	imageTwoSmall,
	imageThreeSmall,
}) => {
	const classHoverOne = () => {
		document
			.querySelector(
				".item__wrapper__container__gallery__small__one"
			)
			.classList.toggle(
				"item__wrapper__container__gallery__small__one--hidden"
			);
		document
			.querySelector(
				".item__wrapper__container__gallery__big__one"
			)
			.classList.toggle(
				"item__wrapper__container__gallery__big__one--hidden"
			);
	};

	const classHoverTwo = () => {
		document
			.querySelector(
				".item__wrapper__container__gallery__small__two"
			)
			.classList.toggle(
				"item__wrapper__container__gallery__small__two--selected"
			);
		document
			.querySelector(
				".item__wrapper__container__gallery__big__two"
			)
			.classList.toggle(
				"item__wrapper__container__gallery__big__two--selected"
			);
	};

	const classHoverThree = () => {
		document
			.querySelector(
				".item__wrapper__container__gallery__small__three"
			)
			.classList.toggle(
				"item__wrapper__container__gallery__small__three--selected"
			);
		document
			.querySelector(
				".item__wrapper__container__gallery__big__three"
			)
			.classList.toggle(
				"item__wrapper__container__gallery__big__three--selected"
			);
	};

	return (
		<div className="item__wrapper__container__gallery">
			<div className="item__wrapper__container__gallery__small">
				<div
					className="item__wrapper__container__gallery__small__one"
					tabIndex="0"
				>
					<img src={imageOneSmall} alt="small-one" />
				</div>
				<div
					className="item__wrapper__container__gallery__small__two"
					onMouseOver={() => {
						classHoverTwo();
						classHoverOne();
					}}
					onMouseOut={() => {
						classHoverTwo();
						classHoverOne();
					}}
					tabIndex="0"
					onFocus={() => {
						classHoverTwo();
						classHoverOne();
					}}
					onBlur={() => {
						classHoverTwo();
						classHoverOne();
					}}
				>
					<img src={imageTwoSmall} alt="small-two" />
				</div>
				<div
					className="item__wrapper__container__gallery__small__three"
					onMouseOver={() => {
						classHoverThree();
						classHoverOne();
					}}
					onMouseOut={() => {
						classHoverThree();
						classHoverOne();
					}}
					tabIndex="0"
					onFocus={() => {
						classHoverThree();
						classHoverOne();
					}}
					onBlur={() => {
						classHoverThree();
						classHoverOne();
					}}
				>
					<img
						src={imageThreeSmall}
						alt="small-three"
					/>
				</div>
			</div>
			<div className="item__wrapper__container__gallery__big">
				<div className="item__wrapper__container__gallery__big__one">
					<img src={imageOneBig} alt="big-one" />
				</div>
				<div className="item__wrapper__container__gallery__big__two">
					<img src={imageTwoBig} alt="big-two" />
				</div>
				<div className="item__wrapper__container__gallery__big__three">
					<img src={imageThreeBig} alt="big-three" />
				</div>
			</div>
		</div>
	);
};

export default ItemGallery;
