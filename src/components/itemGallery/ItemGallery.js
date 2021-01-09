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
				"item__wrapper__container__gallery__small__one--selected"
			);
		document
			.querySelector(
				".item__wrapper__container__gallery__big__one"
			)
			.classList.toggle(
				"item__wrapper__container__gallery__big__one--selected"
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
					onMouseOver={classHoverOne}
					onMouseOut={classHoverOne}
					// onClick={classHoverOne}
					tabIndex="0"
					onFocus={classHoverOne}
					onBlur={classHoverOne}
				>
					<img src={imageOneSmall} alt="small-one" />
				</div>
				<div
					className="item__wrapper__container__gallery__small__two"
					onMouseOver={classHoverTwo}
					onMouseOut={classHoverTwo}
					// onClick={classHoverTwo}
					tabIndex="0"
					onFocus={classHoverTwo}
					onBlur={classHoverTwo}
				>
					<img src={imageTwoSmall} alt="small-two" />
				</div>
				<div
					className="item__wrapper__container__gallery__small__three"
					onMouseOver={classHoverThree}
					onMouseOut={classHoverThree}
					// onClick={classHoverThree}
					tabIndex="0"
					onFocus={classHoverThree}
					onBlur={classHoverThree}
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
