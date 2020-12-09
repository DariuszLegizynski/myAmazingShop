import { Link } from "react-router-dom";

import "./About.css";

const About = () => {
	return (
		<section className="about">
			<div className="about__image">
				<img
					src={"https://i.imgur.com/7hJiT1cl.jpg"}
					alt="about"
				/>
			</div>
			<div className="about__info">
				<p className="about__info__p p">
					Discover beautiful attributes of ordinary,
					everyday electronics
				</p>
				<Link
					className="about__info__link link"
					to={"/personal"}
				>
					<button className="about__info__link__btn btn">
						<span className="about__info__link__btn__span span">
							About
						</span>
					</button>
				</Link>
			</div>
		</section>
	);
};

export default About;
