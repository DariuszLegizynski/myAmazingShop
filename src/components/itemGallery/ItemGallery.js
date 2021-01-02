import React, { useState } from "react";

import "./ItemGallery.css";

const ItemGallery = ({
	imageOneBig,
	imageTwoBig,
	imageThreeBig,
	imageOneSmall,
	imageTwoSmall,
	imageThreeSmall,
}) => {
	const [hoverOne, setHoverOne] = useState(false);
	const [hoverTwo, setHoverTwo] = useState(false);
	const [hoverThree, setHoverThree] = useState(false);

	let classHoverOne = "";
	if (hoverOne) {
		classHoverOne = "selected";
	}

	let classHoverTwo = "";
	if (hoverTwo) {
		classHoverTwo = "selected";
	}

	let classHoverThree = "";
	if (hoverThree) {
		classHoverThree = "selected";
	}

	const returnFalse = (e) => {
		e.preventDefault();
	};

	return (
		<div className="item__wrapper__container__gallery">
			<div className="item__wrapper__container__gallery__small">
				<span
					className={`item__wrapper__container__gallery__small__one ${classHoverOne}`}
					onMouseOver={() => setHoverOne(!hoverOne)}
					onMouseOut={() => setHoverOne(!hoverOne)}
					tabIndex="0"
					onFocus={() => setHoverOne(!hoverOne)}
					onBlur={() => setHoverOne(!hoverOne)}
					onClick={(e) => e.preventDefault()}
				>
					<img src={imageOneSmall} alt="small-one" />
				</span>
				<span
					className={`item__wrapper__container__gallery__small__one ${classHoverTwo}`}
					onMouseOver={() => setHoverTwo(!hoverTwo)}
					onMouseOut={() => setHoverTwo(!hoverTwo)}
					tabIndex="0"
					onFocus={() => setHoverTwo(!hoverTwo)}
					onBlur={() => setHoverTwo(!hoverTwo)}
					onClick={returnFalse}
				>
					<img src={imageTwoSmall} alt="small-two" />
				</span>
				<span
					className={`item__wrapper__container__gallery__small__one ${classHoverThree}`}
					onMouseOver={() =>
						setHoverThree(!hoverThree)
					}
					onMouseOut={() => setHoverThree(!hoverThree)}
					tabIndex="0"
					onFocus={() => setHoverThree(!hoverThree)}
					onBlur={() => setHoverThree(!hoverThree)}
					onClick={returnFalse}
				>
					<img
						src={imageThreeSmall}
						alt="small-three"
					/>
				</span>
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
