import React, { useContext } from "react";
import Input from "../components/TextInput";
import PropType from "prop-types";
import { NumericFormat } from "react-number-format";
import { CartContext } from "../context/Product";

CartDetail.propType = {
	name: PropType.string.isRequired,
	category: PropType.string.isRequired,
	price: PropType.number,
	thumbnail: PropType.string.isRequired,
	qty: PropType.number,
};

export default function CartDetail({ id, qty, thumbnail, name, category, price, handleChange, isCheck, showHandle }) {
	const { cart, updateProduct, deleteProduct } = useContext(CartContext);

	const DecrementCount = () => {
		if (qty > 1) {
			qty -= 1;
			updateProduct({ id }, qty, price * qty);
		} else {
			deleteProduct(id);
		}
	};

	const incrementCount = () => {
		qty += 1;
		updateProduct({ id }, qty, price * qty);
	};

	// console.log(cart);

	return (
		<>
			<tr>
				<th>
					<label>
						<input type="checkbox" className="checkbox" onChange={handleChange} checked={isCheck} />
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
					<NumericFormat value={qty * price} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
				</td>
				<td>
					<div className="flex items-center gap-x-2">
						<button className="btn btn-sm text-xl pb-4" onClick={DecrementCount}>
							-
						</button>
						<Input className="md:max-w-[72px] relative px-4 numHide input-bordered input-primary text-center" type="number" value={qty} />
						<button className="btn btn-sm text-md" onClick={incrementCount}>
							+
						</button>
					</div>
				</td>
				<td>
					<label className="btn btn-primary btn-sm mr-2 ml-12" htmlFor="my-modal-5" onClick={showHandle}>
						Detail
					</label>
					<button className="btn btn-error text-white btn-sm mr-2" onClick={() => deleteProduct(id)}>
						Delete
					</button>
				</td>
			</tr>
		</>
	);
}
