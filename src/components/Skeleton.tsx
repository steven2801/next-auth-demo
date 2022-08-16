import React from "react";

export default function Skeleton({ size = "normal" }: { size?: "sm" | "normal" | "lg" }) {
	return (
		<div
			className={`${size === "sm" && "scale-100"} ${size === "normal" && "my-2 scale-125 hidden sm:flex"} ${
				size === "lg" && "scale-150 my-4 hidden sm:flex"
			} flex gap-2 h-12 items-center origin-left max-w-sm`}
		>
			<div className="w-10 h-10 rounded-full bg-primary/20 relative shimmer overflow-hidden"></div>
			<div className="h-3/4">
				<div className="flex flex-col justify-between h-full">
					<div className="w-40 h-2 rounded-lg bg-primary/20 shimmer relative overflow-hidden"></div>
					<div className="w-48 h-2 rounded-lg bg-primary/30 shimmer relative overflow-hidden"></div>
					<div className="w-32 h-2 rounded-lg bg-primary/10 shimmer relative overflow-hidden"></div>
				</div>
			</div>
		</div>
	);
}
