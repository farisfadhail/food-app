import logoMixue from "../assets/Mixue.jpg";
import Appbar from "../components/Appbar";

export default function Profile() {
	return (
		<>
			<div className="flex flex-col h-screen justify-between bg-base-200">
				<Appbar />
				<div>
					<img src={logoMixue} className=" min-w-full object-cover object-center" alt='' />
				</div>
			</div>
		</>
	);
}
