import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
	return (
		<>
			<div className="flex items-center justify-between px-10 py-2">
				<div className="text-3xl font-bold text-pink-500">
					Golden-
					<span className="text-3xl font-bold text-green-500">Triangle</span>
				</div>
				<div className="">
					<div className="flex space-x-4">
						<a
							href="https://www.tripncare.com/"
							target="_blank"
							rel="tripncare"
							className="font-medium hover:text-green-500 hover:underline"
						>
							Tripncare
						</a>
						<a
							href="https://www.travelncare.com/"
							target="_blank"
							rel="travelncare"
							className="font-medium hover:text-green-500 hover:underline"
						>
							Travelncare
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
