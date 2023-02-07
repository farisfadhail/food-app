import logoMixue from "../assets/Mixue.jpg";
import Appbar from "../components/Appbar";

export default function ContactUs() {
	return (
		<>
			<div className="flex flex-col h-screen justify-between bg-base-200">
				<div className="sticky top-0 z-50">
					<Appbar />
				</div>
				<div>
					<img src={logoMixue} className=" min-w-full object-cover object-center" alt="" />
				</div>
			</div>
		</>
	);
}
