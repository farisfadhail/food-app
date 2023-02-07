import Soto from "../assets/soto.jpg";
import Burrito from "../assets/burrito.jpg";
import NasiKebuli from "../assets/NasiKebuli.jpg";
import Rendang from "../assets/rendang.jpg";
import BokkeumBap from "../assets/bokkeum-bap.jpg";

const Data = [
	{
		id: 1,
		name: "Soto Babat",
		category: "Indonesian Food",
		price: 20000,
		thumbnail: Soto,
		rating: 4,
		featured: 0,
	},
	{
		id: 2,
		name: "Burrito",
		category: "Mexican Food",
		price: 50000,
		thumbnail: Burrito,
		rating: 4.8,
		featured: 0,
	},
	{
		id: 3,
		name: "Nasi Kebuli",
		category: "Arabian Food",
		price: 30000,
		thumbnail: NasiKebuli,
		rating: 5,
		featured: 1,
	},
	{
		id: 4,
		name: "Rendang",
		category: "Indonesian Food",
		price: 15000,
		thumbnail: Rendang,
		rating: 5,
		featured: 1,
	},
	{
		id: 5,
		name: "Bokkeum-bap",
		category: "Korean Food",
		price: 23000,
		thumbnail: BokkeumBap,
		rating: 4.5,
		featured: 1,
	},
];

export { Data };
