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
					everyday electronic
				</p>
				<Link
					className="about__info__link link"
					to={"/about"}
				>
					About
				</Link>
			</div>
		</section>
	);
};

export default About;
