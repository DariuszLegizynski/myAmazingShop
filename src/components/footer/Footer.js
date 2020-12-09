import React from "react";
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
				<Link
					to={"/personal"}
					className="footer__column__link link"
				>
					About
				</Link>
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
