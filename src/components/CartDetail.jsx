import React, { useState, useContext } from "react";
import Input from "../components/TextInput";
import PropType from "prop-types";
import { NumericFormat } from "react-number-format";
import { CartContext } from "../context/Product";
import { Data } from "../parts/DataDummy";

CartDetail.propType = {
	name: PropType.string.isRequired,
	category: PropType.string.isRequired,
	price: PropType.number,
	thumbnail: PropType.string.isRequired,
};

export default function CartDetail({ name, price, category, thumbnail, handleChange }) {
	const { delCart, updateQty, qty, id } = useContext(CartContext);
	const pick = Data.at(id - 1);

	const decrementCount = () => {
		if (qty > 1) updateQty(qty - 1);
	};

	const incrementCount = () => {
		updateQty(qty + 1);
	};

	return (
		<>
			<tr>
				<th>
					<label>
						<input type="checkbox" className="checkbox" onChange={handleChange} />
					</label>
				</th>
				<td>
					<div className="flex items-center space-x-3">
						<div className="avatar">
							<div className="mask mask-squircle w-12 h-12">
								<img src={thumbnail} alt="" />
							</div>
						</div>
						<div>
							<div className="font-bold">{name}</div>
						</div>
					</div>
				</td>
				<td>{category}</td>
				<td>
					<NumericFormat value={price * qty} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
				</td>
				<td>
					<div className="flex items-center gap-x-2">
						<button className="btn btn-sm text-xl pb-4" onClick={decrementCount}>
							-
						</button>
						<Input className="md:max-w-[72px] relative px-4 numHide input-bordered input-primary text-center" type="number" value={qty} />
						<button className="btn btn-sm text-md" onClick={incrementCount}>
							+
						</button>
					</div>
				</td>
				<td>
					<label className="btn btn-primary btn-sm mr-2 ml-12" htmlFor="my-modal-5">
						Detail
					</label>
					<button className="btn btn-error text-white btn-sm mr-2" onClick={delCart}>
						Delete
					</button>
				</td>
			</tr>
		</>
	);
}
