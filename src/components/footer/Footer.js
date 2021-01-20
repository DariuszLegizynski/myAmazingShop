import React, { useState } from "react";

// tools
import { Tooltip } from "react-tippy";
import "react-tippy/dist/tippy.css";
import { Link } from "react-router-dom";

import "./Footer.css";
import icon from "../../resources/icons/icomoon/sprites.svg";

const Footer = () => {
	const [open, setOpen] = useState(false);

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
					About
				</Tooltip>
			</div>
			<div className="footer__column">
				<div
					className="footer__column__link link"
					tabIndex="0"
					onClick={() => setOpen(!open)}
				>
					Contact
				</div>
				{open && (
					<div className="footer__column__icon-container fadeInFromTop">
						<a
							target="_blank"
							rel="noreferrer"
							href="tel:+4367762406805"
						>
							<svg className="footer__column__icon-container__icon icon">
								<use
									href={icon + "#icon-phone"}
								/>
							</svg>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/DariuszLegizynski/myAmazingShop"
						>
							<svg className="footer__column__icon-container__icon icon">
								<use
									href={icon + "#icon-embed2"}
								/>
							</svg>
						</a>
						<a
							target="_blank"
							rel="noreferrer"
							href="mailto:d.legizynski@gmail.com"
						>
							<svg className="footer__column__icon-container__icon icon">
								<use
									href={
										icon + "#icon-envelope-o"
									}
								/>
							</svg>
						</a>
					</div>
				)}
			</div>
		</section>
	);
};

export default Footer;
