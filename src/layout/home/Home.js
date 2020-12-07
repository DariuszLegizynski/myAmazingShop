import React from "react";
import About from "../../components/about/About";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import MotivationText from "../../components/motivationText/MotivationText";
import Productlist from "../../components/products/ProductList/ProductList";

// style
import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<Intro />
			<Productlist />
			<MotivationText />
			<About />
		</div>
	);
};

export default Home;
