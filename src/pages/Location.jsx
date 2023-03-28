import React from "react";
import { agra } from "../utils";
import {
    FaLocationArrow 
} from "react-icons/fa";

const Location = () => {
	return (
		<div className="py-20 bg-green-500/10">
			<div className="pb-8">
				<p className="text-xl font-semibold text-center text-green-500">
					Start your journey
				</p>
				<p className="font-semibold text-center text-pink-500">
					The most demanding places in Golden triangle
				</p>
			</div>
            <div>
                <div className="flex px-20 space-x-10">
                    {agra.map((item)=>(
                        <div key={item.id} className="bg-white rounded-md ">
                            <img src={item.img} alt="" className="w-50" />
                            <FaLocationArrow size={20}/>
                            <p className="text-lg font-semibold text-center text-green-500">{item.location}</p>
                        </div>
                        
                    ))}
                </div>
            </div>
		</div>
	);
};

export default Location;
