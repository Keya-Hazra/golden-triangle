import React from "react";
import { BsFillEnvelopeFill, BsFillTelephoneFill } from 'react-icons/bs';

const Announcement = () => {
	return (
		<div className="flex px-10 py-4 font-semibold text-white bg-green-500">
			
				<div className="flex space-x-4">
					<div className="flex space-x-2">
						<span className="mt-2 text-lg font-semibold">
							<BsFillTelephoneFill size={14} />
						</span>
						<span className="text-lg font-semibold">
							+919073231547
						</span>
					</div>
					<div className="flex space-x-2">
						<span className="mt-2 text-lg font-semibold">
							<BsFillEnvelopeFill size={14} />
						</span>
						<span className="text-lg font-semibold font-norma">
						info@tripncare.com
						</span>
					</div>
				</div>
			
		</div>
	);
};

export default Announcement;
