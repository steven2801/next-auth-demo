import * as React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="layout min-h-screen flex flex-col justify-between">
			<section>
				{/* to fill */}
				<header></header>
				<div className="py-12">{children}</div>
			</section>
			{/* to fill */}
			<footer className="py-8"></footer>
		</div>
	);
}
