import Button from "@/components/Button";
import Input from "@/components/Input";
import Skeleton from "@/components/Skeleton";
import type { NextPage } from "next";
import * as React from "react";
import Title from "@/components/Title";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomLink from "@/components/CustomLink";

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

const LeftPanel = () => {
	return (
		<>
			<div id="font-sizes">
				<Title>Font Sizes</Title>
				<div className="flex flex-col-reverse gap-2">
					<FontSizes />
				</div>
			</div>
			<br />
			<div id="colors">
				<Title>Colors</Title>
				<div className="flex gap-2">
					<Colors />
				</div>
			</div>
			<br />
			<div id="inputs" className="max-w-xs">
				<Title>Inputs</Title>
				<div className="flex flex-col gap-2">
					<Input label="With label" id="input" placeholder="Input with label" />
					<Input id="input" placeholder="Input without label" />
				</div>
			</div>
			<br />
			<div id="buttons">
				<Title>Buttons</Title>
				<div className="flex flex-col gap-4 items-start">
					<Button size="sm">Click Me</Button>
					<Button>Click Me</Button>
					<Button size="lg">Click Me</Button>
				</div>
			</div>
			<br />
			<div id="skeletons">
				<Title>Skeletons</Title>
				<div className="flex gap-2 flex-col">
					<Skeletons />
				</div>
			</div>
		</>
	);
};

const ids = ["font-sizes", "colors", "inputs", "buttons", "skeletons"];

const Design: NextPage = () => {
	const { asPath } = useRouter();

	const currentId = asPath.split("#")[1] ?? "font-sizes";
	return (
		<div>
			<h1 className="mb-8">Design</h1>
			<CustomLink href="/">Return Home</CustomLink>
			<div className="flex justify-between">
				<div>
					<LeftPanel />
				</div>
				<div className="sticky top-12 self-start bg-primary/50 border-2 border-primary/80 rounded-md py-4 pl-8 pr-16 hidden sm:block">
					<div className="flex flex-col gap-2">
						{ids.map((id) => (
							<ul key={id}>
								<li>
									<Link href={`#${id}`}>
										<a
											className={`hover:text-primary text-bg transition-colors duration-300 font-semibold text-lg ${
												currentId === id && "text-primary"
											}`}
										>
											# {id}
										</a>
									</Link>
								</li>
							</ul>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Design;
