import "./index.css";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/product" element={<Product />} />
			<Route path="/cart" element={<Cart />} />
		</Routes>
	);
}
