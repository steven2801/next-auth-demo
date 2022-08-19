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
			<div className="mb-4">
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
