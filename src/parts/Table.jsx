import React, { useContext, useState } from "react";
import CartDetail from "../components/CartDetail";
import DetailFood from "../components/DetailFood";
import { CartContext } from "../context/Product";
import { NumericFormat } from "react-number-format";

import { Data } from "./DataDummy";
import { Link } from "react-router-dom";

export default function Table() {
	const { cart, delCart, total } = useContext(CartContext);
	// const pick = Data.at(id - 1);
	const [check, setCheck] = useState(false);
	const data = Data.map((item) => item.id);
	const pick = cart.map((product) => product.id);

	function handleChange(e) {
		if (e.target.checked) {
			total(parseInt(pick.price) * cart.quantity);
		} else {
			total(0);
		}
	}

	console.log(cart, check);

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
						{cart.length === 0 ? (
							<div className="font-bold my-8 text-end">No item in cart.</div>
						) : (
							Data.map((item) => {
								if (pick in data)
									<>
										<CartDetail handleChange={handleChange} name={item.name} price={item.price} category={item.category} thumbnail={item.thumbnail} key={item.id} />
										<DetailFood name={item.name} price={item.price} category={item.category} thumbnail={item.thumbnail} rating={item.rating} />
									</>;
							})
						)}
					</tbody>

					{/* START: Bottom */}
					<th></th>
					<th></th>
					<th className="text-right">Total :</th>
					<th>
						<NumericFormat value={total} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
					</th>
					<th></th>
					<th className="text-right">
						<Link to={check ? "/checkout" : ""} className="btn btn-accent w-36 text-base text-white" onClick={check ? delCart : ""}>
							Checkout
						</Link>
					</th>
					{/* END: Bottom */}
				</table>
			</div>
		</>
	);
}
