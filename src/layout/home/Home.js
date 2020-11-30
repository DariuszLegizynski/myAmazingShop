import React from 'react'
import Header from '../../components/header/Header';
import Intro from '../../components/intro/Intro';

// style
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Intro />
        </div>
    )
}

export default Home;
