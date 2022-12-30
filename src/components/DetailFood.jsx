import { NumericFormat } from "react-number-format";

export default function DetailFood({ name, price, thumbnail, category, rating = 0 }) {
	return (
		<>
			<input type="checkbox" id="my-modal-5" className="modal-toggle" />
			<label htmlFor="my-modal-5" className="modal cursor-pointer">
				<label className="modal-box relative" htmlFor="">
					<div className="relative group overflow-hidden mx-1">
						<img src={thumbnail} className="object-cover rounded-[30px]" alt="" />
						<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
							<div className="px-7 pb-7">
								<div className="text-sm font-medium text-white mt-1">{rating.toFixed(1)}/5.0</div>
								<div className="font-medium text-xl text-white">{name}</div>
								<div className="font-medium text-md text-white">
									<NumericFormat value={price} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
								</div>
								<p className="mb-0 text-gray-300 text-base ">{category}</p>
							</div>
						</div>
					</div>
				</label>
			</label>
		</>
	);
}
