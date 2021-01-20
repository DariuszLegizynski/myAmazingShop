// tools
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";

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
				<Tooltip
					// options
					tabIndex="0"
					title="Not included in demo version"
					position="bottom"
					trigger="click"
					className="link"
				>
					<span>About</span>
				</Tooltip>
			</div>
		</section>
	);
};

export default About;
