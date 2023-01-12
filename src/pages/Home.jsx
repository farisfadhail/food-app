import { Link } from "react-router-dom";
import Appbar from "../components/Appbar";

export default function Home() {
	return (
		<>
			<div className="flex flex-col h-screen justify-between bg-base-200">
				<Appbar />
				<div className="hero min-h-screen bg-base-200 absolute">
					<div className="hero-content text-center">
						<div className="max-w-md">
							<h1 className="text-5xl font-bold">Hello there</h1>
							<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
							<Link to="/product" className="btn btn-primary">
								Get Started
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
