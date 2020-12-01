import React from "react";

//styles
import "./Intro.css";

//slick-slider
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// images
import sliderImage1 from "../../resources/images/MainTheme/ady-teenagerinro-sQ0xXxQdfeY-unsplash.jpg";
import sliderImage2 from "../../resources/images/MainTheme/norbert-levajsics-dUx0gwLbhzs-unsplash.jpg";
import sliderImage3 from "../../resources/images/MainTheme/joseph-gonzalez-bvteWf284Sw-unsplash.jpg";

const Intro = () => {
	const settings = {
		infinite: true,
		pauseOnHover:false,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		speed: 1250,
		autoplaySpeed: 3500,
		fade: true,
		cssEase: "linear",
	  };

	return (
		<section className="intro">
			<div className="intro__slider-container">
				<Slider {...settings}>
					<div>
						<img className="intro__slider-container__image" src={sliderImage1} alt="backgroundImage1"/>
					</div>
					<div>
						<img className="intro__slider-container__image" src={sliderImage2} alt="backgroundImage2"/>
					</div>
					<div>
						<img className="intro__slider-container__image" src={sliderImage3} alt="backgroundImage3"/>
					</div>
				</Slider>
			</div>
			<div className="intro__text">
				Intro Text
			</div>
		</section>
	);
};

export default Intro;
