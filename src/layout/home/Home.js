import React from "react";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import Productlist from "../../components/products/ProductList/ProductList";

// style
import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<Header />
			<Intro />
			<Productlist />
		</div>
	);
};

export default Home;
