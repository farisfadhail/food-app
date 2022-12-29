import Appbar from "../parts/Appbar";
import Footer from "../parts/Footer";
import Table from "../parts/Table";

export default function () {
	return (
		<>
			<div className="flex flex-col h-screen justify-between bg-base-200">
				<div className="sticky top-0 z-50">
					<Appbar />
				</div>
				<div className="mb-auto mx-8 mt-8">
					<Table />
				</div>
				{/* <section>
					<Footer />
				</section> */}
			</div>
		</>
	);
}
