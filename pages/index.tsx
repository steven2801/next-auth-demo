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
			<CustomLink
				href="https://github.com/steven2801/next-auth-demo"
				target="_blank"
				rel="noreferrer noopener"
				side="right"
				className="text-indigo-300 to-indigo-300 from-indigo-100"
			>
				Repository
			</CustomLink>
		</main>
	);
};

export default Home;
