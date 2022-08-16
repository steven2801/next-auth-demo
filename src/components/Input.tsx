import * as React from "react";

type InputProps = {
	className?: string;
	id: string;
	label?: string;
	placeholder?: string;
} & React.ComponentPropsWithoutRef<"input">;

const Input = ({ className, id, label, placeholder, ...rest }: InputProps) => {
	return (
		<div className="flex flex-col gap-2">
			<label htmlFor={id}>{label}</label>
			<input
				className={`text-primary placeholder:text-primary/80 text-sm bg-primary/20 rounded-lg border-transparent focus:border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-bg focus:ring-primary/50 ${className}`}
				placeholder={placeholder}
				id={id}
				type="text"
				{...rest}
			/>
		</div>
	);
};

export default Input;
