/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				About
			</h3>
			<motion.img
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: false }}
				src={urlFor(pageInfo?.profilePic).url()}
				className="mt-28 md:mt-0 w-[185px] h-[185px] rounded-full object-cover md:rounded-lg md:w-[320px] md:h-[350px] lg:w-[500px] lg:h-[600px]"
			/>
			<div className="mt-0 mb-12 md:mb-0 space-y-3 md:space-y-10 px-0 md:px-10">
				<h4 className="text-2xl md:text-4xl font-semibold">
					Here is a little background
				</h4>
				<p className="text-md md:text-lg">
					{pageInfo?.backgroundInformation}
				</p>
			</div>
		</motion.div>
	);
}
