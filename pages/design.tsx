import Input from "@/components/Input";
import Skeleton from "@/components/Skeleton";
import type { NextPage } from "next";
import * as React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
	return <h2 className="mb-2 stroke text-bg">{children}</h2>;
};

const FontSizes = () => {
	return (
		<>
			<h1>This is h1</h1>
			<h2>This is h2</h2>
			<h3>This is h3</h3>
			<h4>This is h4</h4>
			<h5>This is h5</h5>
			<p>This is p</p>
		</>
	);
};

const Colors = () => {
	return (
		<>
			<div className="w-12 h-8 bg-primary"></div>
			<div className="w-12 h-8 bg-bg border-2 border-primary"></div>
			<div className="w-12 h-8 bg-secondary"></div>
			<div className="w-12 h-8 bg-error"></div>
			<div className="w-12 h-8 bg-success"></div>
		</>
	);
};

const Skeletons = () => {
	return (
		<>
			<Skeleton size="sm" />
			<Skeleton size="normal" />
			<Skeleton size="lg" />
		</>
	);
};

const Design: NextPage = () => {
	return (
		<div>
			<h1 className="mb-8">Design</h1>
			<div className="flex flex-col sm:flex-row gap-4 sm:gap-24">
				<div>
					<Title>Font Sizes</Title>
					<div className="flex flex-col-reverse gap-2">
						<FontSizes />
					</div>
				</div>
				<div className="flex flex-col gap-2">
					<div>
						<Title>Colors</Title>
						<div className="flex gap-2">
							<Colors />
						</div>
					</div>
					<div>
						<Title>Input</Title>
						<div className="flex flex-col gap-2">
							<Input label="With label" id="input" placeholder="Input with label" />
							<Input id="input" placeholder="Input without label" />
						</div>
					</div>
				</div>
			</div>
			<br />
			<Title>Skeleton</Title>
			<div className="flex gap-2 flex-col">
				<Skeletons />
			</div>
		</div>
	);
};

export default Design;
