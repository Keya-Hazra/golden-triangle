import React from "react";
// import SearchIcon from "@mui/icons-material/Search";
// import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

const Navbar = () => {
	return (
		<>
			<div className="flex items-center justify-between px-10 py-4">
			

				<div className="text-3xl font-bold text-pink-500">
					Golden-<span className="text-3xl font-bold text-green-500">Triangle</span>
				</div>
				<div className="">
					<div className="flex space-x-4">
						
						<p className="font-semibold">Tripncare</p>
						<p className="font-semibold">Travelncare</p>
					
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
