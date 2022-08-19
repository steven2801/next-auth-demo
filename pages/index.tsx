import CustomLink from "@/components/CustomLink";
import type { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<main>
			<CustomLink href="/demo" side="right">
				Demo
			</CustomLink>
			{process.env.NODE_ENV === "development" && (
				<CustomLink href="/design" side="right">
					Components
				</CustomLink>
			)}
		</main>
	);
};

export default Home;
