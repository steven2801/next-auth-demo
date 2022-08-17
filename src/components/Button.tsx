import * as React from "react";

type ButtonProps = {
	type?: string;
	className?: string;
	children: React.ReactNode;
	size?: "sm" | "normal" | "lg";
} & React.ComponentPropsWithRef<"button">;

const sizes = {
	sm: "text-sm",
	normal: "text-base",
	lg: "text-lg",
};

const Button = ({ type = "submit", className, children, size = "normal", ...rest }: ButtonProps) => {
	return (
		<button
			type={type}
			className={`text-bg bg-primary/80 px-2 py-1 rounded-md shadow-b shadow-primary active:opacity-80 hover:opacity-90 transition-all duration-200 active:translate-y-[4px] active:shadow-none ${sizes[size]} ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
