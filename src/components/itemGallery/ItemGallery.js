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
	const imagesBig = [imageOneBig, imageTwoBig, imageThreeBig];
	const [selectedImg, setSelectedImg] = useState(imagesBig[0]);

	const toggleImg = (e) => {
		setSelectedImg(imagesBig[e.target.alt]);
	};

	return (
		<section className="item__wrapper__container__center">
			<div className="item__wrapper__container__center__gallery">
				<div className="item__wrapper__container__center__gallery__small">
					<img
						src={imageOneSmall}
						alt="0"
						onClick={toggleImg}
					/>

					<img
						src={imageTwoSmall}
						alt="1"
						onClick={toggleImg}
					/>

					<img
						src={imageThreeSmall}
						alt="2"
						onClick={toggleImg}
					/>
				</div>
				<div className="item__wrapper__container__center__gallery__big">
					<img
						className="item__wrapper__container__center__gallery__big__img"
						src={selectedImg}
						alt="big-one"
					/>
				</div>
			</div>
		</section>
	);
};

export default ItemGallery;
