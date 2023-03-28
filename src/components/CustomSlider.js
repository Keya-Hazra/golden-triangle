import React, { useState, useEffect } from "react";
import "./Slider.css";
import { sliderItems } from "../utils/index";

function CustomCarousel({ children }) {
	const [activeIndex, setActiveIndex] = useState(0);
	const [slideDone, setSlideDone] = useState(true);
	const [timeID, setTimeID] = useState(null);

	const slideNext = () => {
		setActiveIndex((val) => {
			if (val >= children.length - 1) {
				return 0;
			} else {
				return val + 1;
			}
		});
	};

	const slidePrev = () => {
		setActiveIndex((val) => {
			if (val <= 0) {
				return children.length - 1;
			} else {
				return val - 1;
			}
		});
	};
	useEffect(() => {
		if (slideDone) {
			setSlideDone(false);
			setTimeID(
				setTimeout(() => {
					//   slideNext();
					setSlideDone(true);
				}, 5000)
			);
		}
	}, [slideDone]);

	const AutoPlayStop = () => {
		if (timeID > 0) {
			clearTimeout(timeID);
			setSlideDone(false);
		}
	};

	const AutoPlayStart = () => {
		if (!slideDone) {
			setSlideDone(true);
		}
	};

	return (
		<div
			className="container__slider"
			onMouseEnter={AutoPlayStop}
			onMouseLeave={AutoPlayStart}
		>
			
        {sliderItems.map((item) => (
          <div  className={"slider__item slider__item-active-" + (activeIndex + 1)} bg={item.bg} key={item.id}>
            <div>
              <img src={item.img} alt="" className="" />
            </div>
            <div>
              <div>{item.title}</div>
              <div>{item.desc}</div>
              <button>SHOW NOW</button>
            </div>
          </div>
        ))}
     

			<div className="container__slider__links">
				{sliderItems.map((item, index) => {
					return (
						<button
							key={index}
							className={
								activeIndex === index
									? "container__slider__links-small container__slider__links-small-active"
									: "container__slider__links-small"
							}
							onClick={(e) => {
								e.preventDefault();
								setActiveIndex(index);
							}}
						></button>
					);
				})}
			</div>

			<button
				className="slider__btn-next"
				onClick={(e) => {
					e.preventDefault();
					slideNext();
				}}
			>
				{">"}
			</button>
			<button
				className="slider__btn-prev"
				onClick={(e) => {
					e.preventDefault();
					slidePrev();
				}}
			>
				{"<"}
			</button>
		</div>
	);
}

export default CustomCarousel;
