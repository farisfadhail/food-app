import React, { useContext, useState } from "react";
import CartDetail from "../components/CartDetail";
import DetailFood from "../components/DetailFood";
import { CartContext } from "../context/Product";

import { Data } from "./DataDummy";

export default function Table() {
	const { cart, setCart } = useContext(CartContext);
	const [detail, setDetail] = useState({
		name: "",
		price: 0,
		category: "",
		thumbnail: "",
		rating: 0,
	});

	const handleSelect = (id) => {
		const updatedCart = cart.map((product) => {
			if (product.id === id) {
				return { ...product, selected: !product.selected };
			}
			return product;
		});
		setCart(updatedCart);
	};

	console.log(cart);

	return (
		<>
			{cart.map((i) =>
				Data.map((item) =>
					i.id === item.id ? (
						<>
							<CartDetail
								key={item.id}
								thumbnail={item.thumbnail}
								name={item.name}
								category={item.category}
								price={item.price}
								id={i.id}
								qty={i.quantity}
								handleChange={() => handleSelect(i.id, item.price)}
								isCheck={i.selected}
								showHandle={(e) => {
									setDetail({ name: item.name, price: item.price, category: item.category, thumbnail: item.thumbnail, rating: item.rating });
								}}
							/>
						</>
					) : (
						""
					)
				)
			)}
			<DetailFood name={detail.name} price={detail.price} category={detail.category} thumbnail={detail.thumbnail} rating={detail.rating} />
		</>
	);
}
