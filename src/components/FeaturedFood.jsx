import { useState } from "react";
import PropType from "prop-types";
import { NumericFormat } from "react-number-format";

FeaturedFood.propType = {
	name: PropType.string.isRequired,
	category: PropType.string.isRequired,
	price: PropType.number.isRequired,
	thumbnail: PropType.string.isRequired,
	rating: PropType.number,
};

export default function FeaturedFood({ name, category, price, thumbnail, rating = 0, handle }) {
	return (
		<>
			<div className="absolute overflow-hidden group mr-[30px]" onClick={handle}>
				{/* The button to open modal */}
				<label htmlFor="my-modal-4" className="cursor-pointer">
					<img src={thumbnail} className="object-cover rounded-[30px] w-[520px] h-[340px]" alt="" />
					{/* rating */}
					<div className="rating absolute top-0 left-0">
						<div className="p-[30px] flex items-center gap-1">
							<img src="/icons/ic_star.svg" alt="" />
							<span className="text-sm font-medium text-white mt-1">{rating.toFixed(1)}/5.0</span>
						</div>
					</div>
					{/* bottom detail */}
					<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px] flex justify-between items-center px-7 h-[130px]">
						<div>
							<div className="font-medium text-[22px] text-white">{name}</div>
							<div className="font-medium text-[16px] text-white">
								<NumericFormat value={price} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
							</div>
							<p className="mb-0 text-white text-sm font-light">{category}</p>
						</div>
					</div>
				</label>
			</div>
		</>
	);
}
