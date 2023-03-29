import React, { useState } from "react";
import { sliderItems } from "../utils/index";
import "./slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const SliderPage = () => {
	const [, setIsPrevShow] = useState(false);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		arrows: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
		dotsClass: "button__bar",
		beforeChange: (next) => {
			if (next > 0) {
				setIsPrevShow(true);
			} else {
				setIsPrevShow(false);
			}
		},
	};
	return (
		<Slider {...settings} className="z-30 w-full">
			{sliderItems.map((item) => (
				<span key={item.id} >
					<img src={item.img} alt="" />
				</span>
			))}
		</Slider>
	);
};
export default SliderPage;
