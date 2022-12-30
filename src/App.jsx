import "./index.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product" element={<Product />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/profile" element={<Profile />} />
			<Route path="/contact-us" element={<ContactUs />} />
		</Routes>
	);
}
