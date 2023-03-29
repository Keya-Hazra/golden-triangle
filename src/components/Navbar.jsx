import React from "react";

const Navbar = () => {
	return (
		<>
			<div className="flex items-center justify-between px-10">
				<div>
					<img
						src="Logo.jpg"
						alt=""
						className="object-scale-down h-10 w-44 md:max-w-md xs:object-fill"
					/>
				</div>
				<div className="text-3xl font-bold text-pink-500">
					Golden-
					<span className="text-3xl font-bold text-green-500">Triangle</span>
				</div>
				<div className="">
					<div className="flex space-x-4">
						<div className="px-4 py-1 font-semibold text-white rounded-lg bg-gradient-to-r from-green-300 via-green-400 to-green-500 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-500">
							<a
								href="https://www.tripncare.com/"
								target="_blank"
								rel="tripncare"
								className="hover:underline"
							>
								Tripncare
							</a>
						</div>
						<div className="px-4 py-1 font-semibold text-white rounded-lg bg-gradient-to-r from-green-300 via-green-400 to-green-500 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-green-300 dark:focus:ring-green-500">
						<a
							href="https://www.travelncare.com/"
							target="_blank"
							rel="travelncare"
							className="hover:underline"
						>
							Travelncare
						</a>
						</div>
					
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
