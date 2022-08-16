import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<div>
			<h1>Whereas</h1>
			<h2>hi</h2>
			<h3>hi</h3>
			<h4>hi</h4>
			<h5>hi</h5>
			<p>hi</p>
			<br />
			<h2 className="mb-2">Colors</h2>
			<div className="flex gap-2">
				<div className="w-12 h-8 bg-primary"></div>
				<div className="w-12 h-8 bg-bg border-2 border-primary"></div>
				<div className="w-12 h-8 bg-secondary"></div>
				<div className="w-12 h-8 bg-error"></div>
				<div className="w-12 h-8 bg-success"></div>
			</div>
		</div>
	);
};

export default Home;
