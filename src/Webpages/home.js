import React from 'react';
import Headers from "../components/header/header";
import Navbar from "../components/navbar/navbar";
import ContentNews from "../components/content-news/content-news";
import Footer from "../components/footer/footer";

const Home = () => {
    return (
        <div>
            <Headers></Headers>
            <Navbar></Navbar>
            <ContentNews></ContentNews>
            <Footer></Footer>
        </div>
    );
};

export default Home;