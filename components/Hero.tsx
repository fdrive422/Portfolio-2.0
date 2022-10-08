import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`Hi, I'm ${pageInfo?.name}`,
			"Guy-who-loves-Coffee",
			"<ButLovesToCodeMore/>",
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			<BackgroundCircles />
			<motion.img
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
				src={urlFor(pageInfo?.heroImage).url()}
				alt=" "
			/>
			<div className="z-20">
				<h2 className="md:text-md lg:text-lg uppercase text-gray-500 pb-2 tracking-[10px] md:tracking-[15px]">
					{pageInfo?.role}
				</h2>
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>

				<div className="pt-5">
					<Link href="#about">
						<button className="heroButton">About</button>
					</Link>
					<Link href="#experience">
						<button className="heroButton">Experience</button>
					</Link>
					<Link href="#skills">
						<button className="heroButton">Skills</button>
					</Link>
					<Link href="#projects">
						<button className="heroButton">Projects</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
