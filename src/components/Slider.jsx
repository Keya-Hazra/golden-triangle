import React, { useState } from "react";
import ArrowRightOutlined from "@mui/icons-material/ArrowRightOutlined";
import ArrowLeftOutlined from "@mui/icons-material/ArrowLeftOutlined";
import { sliderItems } from "../utils/index";

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(false);

	const handleClick = (next) => {
		if (next > 0) {
			setSlideIndex(true);
		} else {
			setSlideIndex(false);
		}
	};

	return (
		<div className="flex w-full bg-[#FF7F50] h-screen relative">
			<div
				// direction="left"
				{...handleClick}
				className="absolute top-0 bottom-0 flex items-center justify-center w-8 h-8 m-auto bg-white rounded-full opacity-50 left-10"
			>
				<ArrowLeftOutlined className="" />
			</div>
			<div className="flex" slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<div bg={item.bg} key={item.id}>
						<div>
							<img src={item.img} alt="" />
						</div>
						<div>
							<div>{item.title}</div>
							<div>{item.desc}</div>
							<button>SHOW NOW</button>
						</div>
					</div>
				))}
			</div>
			<div
				onClick={() => handleClick()}
				className="absolute top-0 bottom-0 flex items-center justify-center w-8 h-8 m-auto bg-white rounded-full opacity-50 right-10"
			>
				<ArrowRightOutlined />
			</div>
		</div>
	);
};

export default Slider;
