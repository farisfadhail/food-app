import { createContext, useState } from "react";

const CartContext = createContext();

const CartContextProvider = (props) => {
	const [cart, setCart] = useState([]);
	console.log(cart);

	const addToCart = (product, quantity) => {
		// check if product with the same id already exists in the cart
		const existingProduct = cart.find((p) => p.id === product.id);

		if (existingProduct) {
			// if it does, increase the quantity if it's a number
			if (typeof existingProduct.quantity === "number") {
				setCart(cart.map((p) => (p.id === product.id ? { ...p, quantity: p.quantity + quantity } : p)));
			}
		} else {
			// if it doesn't, add the product to the cart with the specified quantity
			setCart([...cart, { ...product, quantity }]);
		}
	};

	const delCart = () => {
		setCart();
	};

	const updateQty = (qty) => {
		setCart([...cart, qty]);
	};

	const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);
	// const total = (totalPrice) => {
	// 	setCart([...cart, totalPrice]);
	// };

	return <CartContext.Provider value={{ total, addToCart, delCart, updateQty, cart }}>{props.children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
