import PropType from "prop-types";
import { NumericFormat } from "react-number-format";

BrowseFood.propType = {
	name: PropType.string.isRequired,
	category: PropType.string.isRequired,
	price: PropType.number,
	thumbnail: PropType.string.isRequired,
};

export default function BrowseFood({ name, price, category, thumbnail }) {
	return (
		<div className="absolute group overflow-hidden mr-[30px]">
			<img src={thumbnail} className="object-cover rounded-[30px] h-[340px] w-[250px]" alt="" />
			<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
				<div className="px-7 pb-7">
					<div className="font-medium text-xl text-white">{name}</div>
					<div className="font-medium text-md text-white">
						<NumericFormat value={price} displayType={"text"} thousandSeparator={true} prefix={"Rp. "} />
					</div>
					<p className="mb-0 text-gray-300 text-base ">{category}</p>
				</div>
			</div>
		</div>
	);
}
