import React from "react";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<div className="py-8 text-white bg-green-500 px-9 md:px-20 lg:px-28">
				<div className="justify-between pb-8 border-b md:flex">
					<div>
						<img
							src="Logo.jpg"
							alt=""
							className="object-scale-down h-12 w-44 md:max-w-md xs:object-fill"
						/>
					</div>
					<div>
						{" "}
						<div className="flex mt-4 space-x-6">
							<Link
								to="https://www.facebook.com/TripncareOTA/"
								className="block hover:text-pink-500 animate-bounce"
								target="_blank"
							>
								<FaFacebook size={30} />
							</Link>
							<Link
								to="https://www.youtube.com/watch?v=BSX2vpnU9x8"
								className="block hover:text-pink-500 animate-bounce"
								target="_blank"
							>
								<FaYoutube size={30} />
							</Link>

							<Link
								to="https://www.linkedin.com/in/tripncare-travels-98b734175/"
								className="block hover:text-pink-500 animate-bounce"
								target="_blank"
							>
								<FaLinkedinIn size={30} />
							</Link>
						</div>
					</div>
				</div>

				<div className="hidden gap-4 py-4 pt-8 lg:visible lg:grid lg:grid-cols-4">
					<div className="space-y-4">
						<Link to="/">
							<p className="text-sm font-normal text-[#FFFFFF]">Compliance</p>
						</Link>
						<a href="/#faq" className="block">
							<p className="text-sm font-normal text-[#FFFFFF]">FAQ</p>
						</a>
						<a href="/#how-it-works" className="block">
							<p className="text-sm font-normal text-[#FFFFFF]">How it works</p>
						</a>
					</div>
					<div className="space-y-4">
						<a href="/#contact-us" className="block">
							<p className="text-sm font-normal text-[#FFFFFF]">Contact Us</p>
						</a>
						<a href="/#about-us" className="block">
							<p className="text-sm font-normal text-[#FFFFFF]">About Us</p>
						</a>
						<Link to="/" className="block">
							<p className="text-sm font-normal text-[#FFFFFF]">Locator</p>
						</Link>
					</div>
					<div className="space-y-4">
						<Link to="/">
							<p className="text-sm font-normal text-[#FFFFFF]">Terms of use</p>
						</Link>
					</div>
					<div className="space-y-2">
						<p className="text-xl font-bold">why Tripncare</p>
						<p className="pb-4 text-sm font-normal leading-6 text-[#FFFFFF]/50">
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do
							amet sint. Velit officia consequat.
						</p>
					</div>
				</div>
				<div className="lg:hidden">
					<div>
						<div className="grid grid-cols-2 gap-4 py-4 pt-8 md:grid-cols-3 ">
							<div className="space-y-4">
								<Link to="/">
									<p className="text-sm font-normal text-[#FFFFFF]">
										Compliance
									</p>
								</Link>
								<a href="/#faq" className="block">
									<p className="text-sm font-normal text-[#FFFFFF]">FAQ</p>
								</a>
								<a href="/#how-it-works" className="block">
									<p className="text-sm font-normal text-[#FFFFFF]">
										How it works
									</p>
								</a>
							</div>
							<div className="space-y-4">
								<a href="/#contact-us" className="block">
									<p className="text-sm font-normal text-[#FFFFFF]">
										Contact Us
									</p>
								</a>
								<a href="/#about-us" className="block">
									<p className="text-sm font-normal text-[#FFFFFF]">About Us</p>
								</a>
								<a href="/" className="block">
									<p className="text-sm font-normal text-[#FFFFFF]">Locator</p>
								</a>
							</div>
							<div className="space-y-4">
								<Link to="/">
									<p className="text-sm font-normal text-[#FFFFFF]">
										Terms of use
									</p>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full py-16 md:w-96">
						<div className="space-y-2">
							<p className="text-xl font-bold">why Tripncare</p>
							<p className="pb-4 text-sm font-normal leading-6 text-[#FFFFFF]/50">
								Amet minim mollit non deserunt ullamco est sit aliqua dolor do
								amet sint. Velit officia consequat.
							</p>
						</div>
					</div>
				</div>

				<p className="text-start text-sm font-normal text-[#FFFFFF]/60 md:py-4 lg:py-0">
					Copyright @ Tripncare 2023. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
