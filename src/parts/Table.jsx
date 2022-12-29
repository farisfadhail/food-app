import React, { useContext } from "react";
import CartDetail from "../components/CartDetail";

import { Data } from "./DataDummy";

export default function Table() {
	const dataCart = Data.map((item, index) => {
		return <CartDetail name={item.name} price={item.price} category={item.category} thumbnail={item.thumbnail} key={index} />;
	});

	const total = useContext(dataCart);

	return (
		<>
			<div className="overflow-x-auto w-full">
				<table className="table w-full">
					{/* head */}
					<thead>
						<tr>
							<th>
								<label>
									<input type="checkbox" className="checkbox" />
								</label>
							</th>
							<th>Name</th>
							<th>Category</th>
							<th>Price</th>
							<th>Quantity</th>
							<th></th>
						</tr>
					</thead>
					<tbody>{dataCart}</tbody>
				</table>
			</div>
			<footer className="px-10 py-8 bg-base-200 flex w-full justify-items-end">
				<div className="text-base">{total}</div>
				<button type="submit" className="btn btn-accent text-base text-white">
					Checkout
				</button>
			</footer>
		</>
	);
}
