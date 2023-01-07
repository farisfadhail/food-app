import { useContext, useState } from "react";
import Input from "./TextInput";
import { NumericFormat } from "react-number-format";
import { CartContext } from "../context/Product";

export default function Modal({ id, name, price, category }) {
	const { addToCart } = useContext(CartContext);
	const [count, setCount] = useState(1);

	const decrementCount = () => {
		if (count > 1) setCount(count - 1);
	};

	const incrementCount = () => {
		setCount(count + 1);
	};

	const reset = () => {
		setCount(1);
	};

	const addToCartHandler = () => {
		addToCart({ id }, count, price * count);
	};

	// console.log(id, count);

	return (
		<>
			<input type="checkbox" id="my-modal-4" className="modal-toggle" onClick={reset} />
			<label htmlFor="my-modal-4" className="modal cursor-pointer">
				<label className="modal-box relative" htmlFor="">
					<h3 className="font-bold text-lg">Add {name} to Cart?</h3>
					<div className="font-medium text-lg">
						<NumericFormat value={price * count} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
					</div>
					<p className="mb-0 text-md font-light">{category}</p>
					<div className="modal-action">
						<div className="flex items-center gap-x-2 mr-8">
							<button className="btn btn-sm text-xl pb-4" onClick={decrementCount}>
								-
							</button>
							<Input className="md:max-w-[72px] relative px-4 numHide input-bordered input-primary text-center" type="number" value={count} />
							<button className="btn btn-sm text-md" onClick={incrementCount}>
								+
							</button>
						</div>
						<label htmlFor="my-modal-4" className="btn btn-primary text-white text-base" onClick={addToCartHandler}>
							Add
						</label>
					</div>
				</label>
			</label>
		</>
	);
}
