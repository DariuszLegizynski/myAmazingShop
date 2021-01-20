import React from "react";
import About from "../../components/about/About";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import MotivationText from "../../components/motivationText/MotivationText";
import Productlist from "../../components/products/ProductList/ProductList";
import Shipment from "../../components/shipment/Shipment";

// style
import "./Home.css";

const Home = () => {
	return (
		<div className="home fadeIn">
			<Header />
			<Intro />
			<Productlist />
			<MotivationText />
			<About />
			<hr className="hr" />
			<Shipment />
			<Footer />
		</div>
	);
};

export default Home;
