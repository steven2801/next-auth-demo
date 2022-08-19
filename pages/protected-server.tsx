import CustomLink from "@/components/CustomLink";
import useUser from "@/hooks/useUser";
import type { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";

const ProtectedServer: NextPage = () => {
	const { user } = useUser();
	return (
		<main>
			<CustomLink href="/demo">Back to demo</CustomLink>
			{user ? (
				<h1 className="h3 mt-4">Welcome back {user.user.name}</h1>
			) : (
				<h1 className="h3 mt-4">This is a protected Route.</h1>
			)}
			<div className="mt-4">
				<h2 className="h4">Protecting a route server side:</h2>
				<ul>
					<li>
						There is no text flashing/skeleton because the page is prepared server-side, including the user session.
					</li>
					<li>This approach brings seamless and smooth experience to the user.</li>
				</ul>
			</div>
		</main>
	);
};

export default ProtectedServer;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
	return {
		props: {
			session: await getSession(ctx),
		},
	};
}
