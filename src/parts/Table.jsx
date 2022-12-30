import React, { useContext, Component } from "react";
import CartDetail from "../components/CartDetail";
import DetailFood from "../components/DetailFood";

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
					<tbody>
						{dataCart}
						{Data.map((item, index) => {
							return <DetailFood name={item.name} price={item.price} rating={item.rating} thumbnail={item.thumbnail} category={item.category} />;
						})}
					</tbody>
					{/* START: Bottom */}
					<th></th>
					<th></th>
					<th className="text-right">Total :</th>
					<th>{total}</th>
					<th></th>
					<th className="text-right">
						<button type="submit" className="btn btn-accent w-36 text-base text-white">
							Checkout
						</button>
					</th>
					{/* END: Bottom */}
				</table>
			</div>
		</>
	);
}
