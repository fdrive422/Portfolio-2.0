import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	skill: Skill;
	// directionLeft?: boolean;
};

function Skill({ skill }: Props) {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{
					y: -200,
					opacity: 0,
				}}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				src={urlFor(skill?.image).url()}
				className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 filter group-hover:grayscale transition duration-300"
			/>
			<div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full z-0">
				<div className="flex items-center justify-center h-full">
					<p className="text-xl md:text-3xl font-bold text-black opacity-100">
						{skill.progress}%
					</p>
				</div>
			</div>
		</div>
	);
}

export default Skill;
