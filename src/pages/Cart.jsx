import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/Product";

import { Link } from "react-router-dom";

import Appbar from "../components/Appbar";
import Table from "../components/Table";

export default function Cart () {
	const { cart, setCart, deleteSelectedProducts } = useContext(CartContext);

	useEffect(() => {
		console.log("cart updated:", cart);
	}, [cart]);

	const [selectAll, setSelectAll] = useState(false);

	const handleSelectAll = () => {
		setSelectAll(!selectAll);
		const updatedCart = cart.map((product) => ({ ...product, selected: !selectAll }));
		setCart(updatedCart);
	};

	let totalPrice = cart.reduce((previous, current) => {
		return previous + current.price;
	}, 0);
	totalPrice = new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(totalPrice)

	return (
		<>
			<div className="flex flex-col h-screen justify-between bg-base-200">
				<Appbar />
				<div className="mb-auto mx-8 mt-8">
					<div className="overflow-x-auto w-full">
						<table className="table w-full">
							{/* head */}
							<thead>
								<tr>
									<th>
										<label>
											<input type="checkbox" className="checkbox" checked={selectAll} onChange={handleSelectAll} />
										</label>
									</th>
									<th>Name</th>
									<th>Category</th>
									<th>Price</th>
									<th>Quantity</th>
									<th></th>
								</tr>
							</thead>
							<tbody>{cart.length === 0 ? <div className="font-bold my-8 text-end">No item in cart.</div> : <Table />}</tbody>

							{/* START: Bottom */}
							<th colSpan={3} className="text-right">Total :</th>
							<th colSpan={2}>{totalPrice}</th>
							<th className="text-right">
								<button className="btn btn-error w-28 text-base text-white " onClick={deleteSelectedProducts}>
									Delete
								</button>
								<Link to={cart.length === 0 ? "" : "/checkout"} className="btn btn-accent w-36 text-base text-white ml-4" onClick={deleteSelectedProducts}>
									Checkout
								</Link>
							</th>
							{/* END: Bottom */}
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
