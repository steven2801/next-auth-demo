import * as React from "react";

type ButtonProps = {
	type?: string;
	className?: string;
	children: React.ReactNode;
	size?: "sm" | "normal" | "lg";
	disabled?: boolean;
} & React.ComponentPropsWithRef<"button">;

const sizes = {
	sm: "text-sm",
	normal: "text-base",
	lg: "text-lg",
};

const Button = ({ type = "submit", className, children, disabled, size = "normal", ...rest }: ButtonProps) => {
	return (
		<button
			type={type}
			className={`text-bg  px-2 py-1 rounded-md shadow-b active:opacity-80 hover:opacity-90 transition-all duration-200 active:translate-y-[4px] active:shadow-none ${
				sizes[size]
			} ${className ?? "shadow-primary bg-primary/80"} ${
				disabled && "opacity-50 cursor-not-allowed hover:opacity-50 active:opacity-50"
			}`}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
