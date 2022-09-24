/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

export default function ExperienceCard({}: Props) {
	return (
		<article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer tranition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				src="https://cdn3.vectorstock.com/i/1000x1000/20/02/modern-tech-cyber-security-logo-design-eps10-vector-27912002.jpg"
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">CEO of FDRIVE</h4>
				<p className="font-bold text-2xl mt-1">FDRIVE</p>
				<div className=" flex space-x-2 my-2">
					<img
						className="h-10 w-10 rounded-full"
						src="http://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
						alt=""
					/>
					<img
						className="h-10 w-10 rounded-full"
						src="http://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
						alt=""
					/>
					<img
						className="h-10 w-10 rounded-full"
						src="http://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
						alt=""
					/>
					{/* Tech used */}
					{/* Tech used */}
					{/* Tech used */}
				</div>
				<p className="uppercase py-5 text-gray-300">
					Started work... - Ended...
				</p>

				<ul className="list-disc space-y-4 ml-5 text-lg">
					<li>
						Summary points Summary points Summary points Summary
						points
					</li>
					<li>
						Summary points Summary points Summary points Summary
						points
					</li>
					<li>
						Summary points Summary points Summary points Summary
						points
					</li>
					<li>
						Summary points Summary points Summary points Summary
						points
					</li>
					<li>
						Summary points Summary points Summary points Summary
						points
					</li>
				</ul>
			</div>
		</article>
	);
}
