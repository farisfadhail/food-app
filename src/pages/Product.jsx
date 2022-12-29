import Appbar from "../parts/Appbar";
import BrowseFood from "../components/BrowseFood";
// import Footer from "../parts/Footer";

import { Data } from "../parts/DataDummy";
import FeaturedFood from "../components/FeaturedFood";
import Flickity from "react-flickity-component";

export default function Order() {
	const flickityOptions = {
		cellAlign: "left",
		contain: true,
		groupCells: 1,
		wrapAround: false,
		pageDots: false,
		prevNextButtons: false,
		draggable: ">1",
	};
	return (
		<>
			<div className="flex flex-col h-screen justify-between">
				<div className="sticky top-0 z-50">
					<Appbar />
				</div>
				<div className="mb-auto mx-8 my-8">
					<div>
						<div className="font-semibold text-[22px] text-black mb-4">Featured Food</div>
						<Flickity className="gap-[30px]" options={flickityOptions}>
							{Data.map((item, index) => {
								return <FeaturedFood name={item.name} rating={item.rating} category={item.category} price={item.price} thumbnail={item.thumbnail} key={index} />;
							})}
						</Flickity>
					</div>
					{/* Browse */}
					<div className="mt-8">
						<div className="font-semibold text-[22px] text-black mb-4">Browse Food</div>
						<Flickity className="gap-[30px]" options={flickityOptions}>
							{Data.map((item) => (
								<BrowseFood key={item.id} price={item.price} name={item.name} category={item.category} thumbnail={item.thumbnail} />
							))}
						</Flickity>
					</div>
				</div>

				{/* <section>
					<Footer />
				</section> */}
			</div>
		</>
	);
}
