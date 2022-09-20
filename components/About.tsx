import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
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
				viewport={{ once: true }}
				src="https://scontent-lax3-1.xx.fbcdn.net/v/t1.18169-9/20597483_10209619726306051_3406035872081272498_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=8MTuOwoYYRYAX-hqALc&_nc_ht=scontent-lax3-1.xx&oh=00_AT8I6osXjhqoXCvfIJz9t3_odbTxOpffTOxNcKH-QDQW_Q&oe=63500720"
				className="mb-20 md:md-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className="text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A]/50">
						little
					</span>{" "}
					background
				</h4>
				<p className="text-lg">
					I'm Francis! I've been coding for 2 years. As a Full Stack
					Developer I've worked with three programming stacks -
					Python, Java, and MERN. I continue to build my knowledge in
					programming while discovering new techniques and solutions
					with each project I create. The process is rewarding and the
					journey motivating. I enjoy collaborating with others and
					contribute my skills and experience whenever I can.
				</p>
			</div>
		</motion.div>
	);
}
