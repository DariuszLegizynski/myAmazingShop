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
import { Link } from "react-router-dom";

const Intro = () => {
	const settings = {
		arrows: false,
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
			<div className="intro__title">
				<div className="intro__title__white-bg">
					<div className="intro__title__white-bg__subtitle">
						<p className="intro__title__white-bg__subtitle__p p">
							― Arthur C. Clarke
						</p>
					</div>
					<div className="intro__title__white-bg__main-title">
						<h1 className="intro__title__white-bg__main-title__h1 h1">
							Any sufficiently advanced technology is indistinguishable from magic.
						</h1>
					</div>
					<div className="intro__title__white-bg__description">
						<span className="intro__title__white-bg__description__span span">
							Inspired by technology, we bring the newest models to your home.
						</span>
					</div>
					<div className="intro__title__white-bg__shop">
						<Link className="intro__title__white-bg__shop__link link" to={"/"}>
							<button className="btn--shop btn" tabIndex="-1">
								<span className="span">
									Shop
								</span>
							</button>
						</Link>
					</div>
				</div>
				
			</div>
		</section>
	);
};

export default Intro;
