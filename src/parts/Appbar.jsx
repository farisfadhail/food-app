import { Link } from "react-router-dom";
import Logo from "../assets/LogoPemro.png";
import Foto from "../assets/sana.png";
import { Data } from "./DataDummy";

export default function Appbar() {
	return (
		<>
			<div className="navbar bg-base-100 py-4 rounded-b-lg shadow-md">
				<div className="navbar-start">
					<div className="dropdown">
						<label tabIndex={0} className="btn btn-ghost lg:hidden">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
							</svg>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/product">Product</Link>
							</li>
							<li tabIndex={0}>
								<a className="justify-between">
									About
									<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
										<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
									</svg>
								</a>
								<ul className="p-2 bg-white shadow-md">
									<li>
										<Link to="/profile">Profile</Link>
									</li>
									<li>
										<Link to="/contact-us">Contact Us</Link>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					<Link to="/" className="ml-8">
						<img src={Logo} className="w-10" />
					</Link>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1 gap-x-2">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/product">Product</Link>
						</li>
						<li tabIndex={0}>
							<a>
								About
								<svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
									<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
								</svg>
							</a>
							<ul className="p-2 bg-white shadow-md">
								<li>
									<Link to="/profile">Profile</Link>
								</li>
								<li>
									<Link to="/contact-us">Contact Us</Link>
								</li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="navbar-end">
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle">
							<Link to="/cart">
								<div className="indicator">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
										/>
									</svg>
									<span className="badge badge-sm indicator-item">{Data.length}</span>
								</div>
							</Link>
						</label>
					</div>
					<div className="dropdown dropdown-end">
						<label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-8 ml-2">
							<div className="w-10 rounded-full">
								<img src={Foto} />
							</div>
						</label>
						<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
							<li>
								<a>Logout</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
