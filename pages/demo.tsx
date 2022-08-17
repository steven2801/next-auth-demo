import CustomLink from "@/components/CustomLink";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<main>
			<h1 className="mb-4">Demo</h1>
			<CustomLink href="/">Return Home</CustomLink>
		</main>
	);
};

export default Home;
