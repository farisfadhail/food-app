import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = (props) => {
	const [cart, setCart] = useState([]);

	const addToCart = (product, quantity, price) => {
		const existingProduct = cart.find((p) => p.id === product.id);

		if (existingProduct) {
			if (typeof existingProduct.quantity === "number") {
				setCart(cart.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + quantity, price: p.price + price } : p)));
			}
		} else {
			setCart([...cart, { ...product, quantity, price }]);
		}
	};

	const deleteProduct = (id) => {
		setCart(cart.filter((product) => product.id !== id));
	};

	const updateProduct = (product, newQuantity, newPrice) => {
		const updatedProduct = { ...product, quantity: newQuantity, price: newPrice, selected: false };
		setCart(cart.map((p) => (p.id === product.id ? updatedProduct : p)));
	};

	const deleteSelectedProducts = () => {
		const updatedCart = cart.filter((product) => !product.selected);
		setCart(updatedCart);
	};

	return <CartContext.Provider value={{ deleteSelectedProducts, deleteProduct, addToCart, updateProduct, cart, setCart }}>{props.children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
