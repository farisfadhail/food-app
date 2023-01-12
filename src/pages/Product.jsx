import Appbar from "../components/Appbar";
import BrowseFood from "../components/BrowseFood";
import { useState } from "react";

import { getProducts } from "../utils/local-data";
import Modal from "../components/Modal";
import FeaturedFood from "../components/FeaturedFood";
import Flickity from "react-flickity-component";

export default function Order() {
	const [products] = useState(() => getProducts()) 

	const flickityOptions = {
		cellAlign: "left",
		contain: true,
		groupCells: 1,
		wrapAround: false,
		pageDots: false,
		prevNextButtons: false,
		draggable: ">1",
	};

	const [modal, setModal] = useState({
		id: 0,
		name: "",
		price: "",
		category: "",
	});



	return (
		<>
			<div className="flex flex-col h-screen justify-between">
				<Appbar />
				<div className="mb-auto mx-8 my-8">
					<div>
						<div className="font-semibold text-[22px] text-black mb-4">Featured Food</div>
						<Flickity className="gap-[30px]" options={flickityOptions}>
							{products.map((item) => {
								if (item.featured === 1) {
									return (
										<FeaturedFood
											name={item.name}
											rating={item.rating}
											category={item.category}
											price={item.price}
											thumbnail={item.thumbnail}
											key={item.id}
											handle={(e) => {
												setModal({ id: item.id, name: item.name, price: item.price, category: item.category });
											}}
										/>
									);
								}
								return null // always return something if use map in react
							})}
						</Flickity>
					</div>
					{/* Browse */}
					<div className="my-8">
						<div className="font-semibold text-[22px] text-black mb-4">Browse Food</div>
						<Flickity className="gap-[30px]" options={flickityOptions}>
							{products.map((item) => (
								<BrowseFood
									key={item.id}
									price={item.price}
									name={item.name}
									rating={item.rating}
									category={item.category}
									thumbnail={item.thumbnail}
									handle={(e) => {
										setModal({ id: item.id, name: item.name, price: item.price, category: item.category });
									}}
								/>
							))}
						</Flickity>
					</div>

					<Modal id={modal.id} name={modal.name} price={modal.price} category={modal.category} />
				</div>
			</div>
		</>
	);
}
