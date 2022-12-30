import React, { useState } from "react";
import Input from "../components/TextInput";
import PropType from "prop-types";
import { NumericFormat } from "react-number-format";
import DetailFood from "./DetailFood";

CartDetail.propType = {
	name: PropType.string.isRequired,
	category: PropType.string.isRequired,
	price: PropType.number,
	thumbnail: PropType.string.isRequired,
};

export default function CartDetail({ name, price, category, thumbnail }) {
	const [count, setCount] = useState(1);

	const decrementCount = () => {
		if (count > 1) setCount(count - 1);
	};

	const incrementCount = () => {
		setCount(count + 1);
	};

	return (
		<>
			<tr>
				<th>
					<label>
						<input type="checkbox" className="checkbox" />
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
					<NumericFormat value={price * count} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
				</td>
				<td>
					<div className="flex items-center gap-x-2">
						<button className="btn btn-sm text-xl pb-4" onClick={decrementCount}>
							-
						</button>
						<Input className="md:max-w-[72px] relative px-4 numHide input-bordered input-primary text-center" type="number" value={count} />
						<button className="btn btn-sm text-md" onClick={incrementCount}>
							+
						</button>
					</div>
				</td>
				<td>
					<label className="btn btn-primary btn-sm mr-2 ml-12" htmlFor="my-modal-5">
						Detail
					</label>
					<button className="btn btn-error text-white btn-sm mr-2">Delete</button>
				</td>
			</tr>
		</>
	);
}
