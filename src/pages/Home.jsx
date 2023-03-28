import React from "react";
import Announcement from "../components/Announcement";
import Navbar from "../components/Navbar";
import SliderPage from "../components/SliderPage";
import Footer from "./Footer";
import Location from "./Location";

const Home = () => {
	return (
		<div>
			<Announcement />
			<Navbar />
			<SliderPage />
			<Location />
			<Footer/>
		</div>
	);
};

export default Home;
