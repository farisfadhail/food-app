import React, { useContext, useState } from "react";
import CartDetail from "../components/CartDetail";
import DetailFood from "../components/DetailFood";
import { CartContext } from "../context/Product";
import { NumericFormat } from "react-number-format";

import { Data } from "./DataDummy";

export default function Table() {
	const { id, qty, delCart } = useContext(CartContext);
	const pick = Data.at(id - 1);
	const [total, setTotal] = useState({
		total: 0,
	});

	function handleChange(e) {
		if (e.target.checked) {
			setTotal({
				...total,
				total: pick.price * qty,
			});
		} else {
			setTotal({ total: 0 });
		}
	}

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
						{id === 0 ? (
							<div className="font-bold my-8 text-end">No item in cart.</div>
						) : (
							<>
								<CartDetail handleChange={handleChange} name={pick.name} price={pick.price} category={pick.category} thumbnail={pick.thumbnail} key={pick.id} />
								<DetailFood name={pick.name} price={pick.price} category={pick.category} thumbnail={pick.thumbnail} rating={pick.rating} />
							</>
						)}
					</tbody>

					{/* START: Bottom */}
					<th></th>
					<th></th>
					<th className="text-right">Total :</th>
					<th>
						<NumericFormat value={total.total} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
					</th>
					<th></th>
					<th className="text-right">
						<button type="submit" className="btn btn-accent w-36 text-base text-white" onClick={delCart}>
							Checkout
						</button>
					</th>
					{/* END: Bottom */}
				</table>
			</div>
		</>
	);
}
