import React from "react";

import "./Burger.css";

const Burger = ({ burgerClass }) => {
	return (
		<section className={`burger burger${burgerClass}`}>
			<div />
			<div />
			<div />
		</section>
	);
};

export default Burger;
