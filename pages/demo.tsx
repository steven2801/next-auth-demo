import Button from "@/components/Button";
import CustomLink from "@/components/CustomLink";
import Skeleton from "@/components/Skeleton";
import type { NextPage } from "next";
import { signIn } from "next-auth/react";
import * as React from "react";
import useUser from "@/hooks/useUser";

const Home: NextPage = () => {
	const { user, isLoading, logout } = useUser();

	return (
		<main>
			<h1 className="mb-4">Demo</h1>
			<CustomLink href="/">Return Home</CustomLink>
			<CustomLink href="/protected-client" side="right" className="text-yellow-300 to-yellow-300 from-yellow-100">
				Enter protected route (client-side)
			</CustomLink>
			<CustomLink href="/protected-server" side="right" className="text-green-300 to-green-300 from-green-100">
				Enter protected route (server-side)
			</CustomLink>
			<div className="mb-4">
				<p className="mb-2 font-bold">Current User:</p>
				{isLoading ? (
					<Skeleton size="sm" />
				) : (
					<>
						<pre>{JSON.stringify(user, null, "\t")}</pre>
					</>
				)}
			</div>
			<div className="flex flex-col gap-4 items-start">
				<Button onClick={() => signIn("github")} className="bg-indigo-300 shadow-indigo-500" disabled={isLoading}>
					Sign in with Github
				</Button>
				<Button onClick={() => signIn("google")} className="bg-indigo-300 shadow-indigo-500" disabled={isLoading}>
					Sign in with Google
				</Button>
				<Button onClick={() => logout()} className="bg-red-300 shadow-red-500" disabled={isLoading}>
					Sign out
				</Button>
			</div>
		</main>
	);
};

export default Home;
