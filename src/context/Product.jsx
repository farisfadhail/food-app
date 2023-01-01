import { createContext, useState } from "react";

const cartInitialValue = {
	id: 0,
	qty: 0,
};

const CartContext = createContext(cartInitialValue);

const CartContextProvider = (props) => {
	const [state, setState] = useState(cartInitialValue);

	const addCart = (id, qty) => {
		setState({ id: id, qty: qty });
	};

	const delCart = () => {
		setState(cartInitialValue);
	};

	const updateQty = (qty) => {
		setState({ id: state.id, qty: qty });
	};

	return <CartContext.Provider value={{ id: state.id, qty: state.qty, addCart, delCart, updateQty }}>{props.children}</CartContext.Provider>;
};

export { CartContext, CartContextProvider };
