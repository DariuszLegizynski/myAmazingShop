import React from "react";

// tools
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
	return (
		<section className="footer">
			<div className="footer__column">
				<Link
					to={"/shop"}
					className="footer__column__link link"
				>
					Products
				</Link>
			</div>
			<div className="footer__column">
				<Tooltip
					// options
					tabIndex="0"
					title="Not included in demo version"
					position="bottom"
					trigger="click"
					className="footer__column__link link"
				>
					<span>About</span>
				</Tooltip>
			</div>
			<div className="footer__column">
				<Link
					to={"/contact"}
					className="footer__column__link link"
				>
					Contact
				</Link>
			</div>
		</section>
	);
};

export default Footer;
