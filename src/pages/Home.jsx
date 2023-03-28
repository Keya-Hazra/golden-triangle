import React from "react";
import Announcement from "../components/Announcement";
import CustomSlider from "../components/CustomSlider";
import Navbar from "../components/Navbar";
import SliderPage from "../components/SliderPage";
import Slider from "../components/SliderPage";

const Home = () => {
	return (
		<div>
			<Announcement/>
			<Navbar />
			<SliderPage/>
			{/* <Slider/> */}
			{/* <CustomSlider/> */}
		</div>
	);
};

export default Home;