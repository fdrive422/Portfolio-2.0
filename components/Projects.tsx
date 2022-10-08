/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = {
	projects: Project[];
};

function Projects({ projects }: Props) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 ">
			<h3 className="absolute text-lg md:text-2xl top-24 uppercase tracking-[20px] text-gray-500">
				Projects
			</h3>
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				{projects?.map((project, i) => (
					<div
						key={project._id}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-2 md:space-y-5 items-center justify-center p-20 md:p-20 h-screen">
						<motion.img
							className="mt-10 md:mt-0 h-[150px] md:h-[325px] lg:h-[450px] object-cover rounded"
							initial={{
								y: -200,
								opacity: 0,
							}}
							transition={{ duration: 1.2 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: false }}
							src={urlFor(project?.image).url()}
							alt=""
						/>
						<div className="space-y-5 px-0 md:px-5 max-w-6xl">
							<h4 className="text-lg md:text-3xl font-semibold text-center">
								{/* <span className="underline decoration-[#F7AB0A]/50"> */}
								Case Study {i + 1} of {projects.length}
								{/* </span>{" "} */}
								{/* {project?.title} */}
							</h4>
							<div className="flex items-center space-x-3 justify-center">
								{project?.technologies.map((technology) => (
									<img
										className="h-8 w-8 md:h-10 md:w-10 rounded-full"
										key={technology._id}
										src={urlFor(technology.image).url()}
										alt=" "
									/>
								))}
							</div>
							<p className="text-md md:text-xl text-center">
								<span className="underline decoration-[#F7AB0A]/50">
									{project?.title}
								</span>{" "}
								{project?.summary}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[30%] bg-[#f7aB0A]/10 left-0 h-[500px] -skew-y-12" />
		</motion.div>
	);
}

export default Projects;
