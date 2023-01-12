import { Link } from "react-router-dom";
import Success from "../assets/success.png";

export default function Checkout() {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<img src={Success} alt='' />
					<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
					<Link to="/product" className="btn btn-primary font-bold ">
						Back to Product
					</Link>
				</div>
			</div>
		</div>
	);
}
