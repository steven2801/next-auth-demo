import CustomLink from "@/components/CustomLink";
import Skeleton from "@/components/Skeleton";
import useUser from "@/hooks/useUser";
import type { NextPage } from "next";

const ProtectedClient: NextPage = () => {
	const { user, isLoading } = useUser();
	return (
		<main>
			<CustomLink href="/demo">Back to demo</CustomLink>
			{isLoading && <Skeleton />}
			<div className={`${isLoading && "opacity-0"}`}>
				{user ? (
					<h1 className="h3 mt-4">Welcome back {user.user.name}</h1>
				) : (
					<h1 className="h3 mt-4">This is a protected Route.</h1>
				)}
			</div>
			<div className="mt-4">
				<h2 className="h4">Protecting a route client side:</h2>
				<ul>
					<li>
						You might see some text flashing/skeleton indicating the page is still <b>loading</b> after the page is
						ready.
					</li>
					<li>This happened because we made another request to retrieve the current user after the page loads.</li>
				</ul>
			</div>
		</main>
	);
};

export default ProtectedClient;
