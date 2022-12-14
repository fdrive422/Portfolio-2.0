/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
	PhoneIcon,
	MapPinIcon,
	EnvelopeIcon,
	ArrowDownOnSquareIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

type Props = {};

function ContactMe({}: Props) {
	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = (formData) => {
		window.location.href = `mailto:fafrago@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`;
	};
	return (
		<div className="h-screen flex relative flex-col text-center md:text-left md:flex-rox max-w-xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[15px] md:tracking-[20px] text-gray-500 text-2xl">
				Contact
			</h3>
			<div className="mx-autoflex flex-col space-y-5 md:space-y-10">
				<h4 className="mt-20 md:mt-0 text-2xl md:text-3xl font-semibold text-center">
					I can help you with your next project. Let's Talk!
				</h4>

				<div className="space-y-4 md:space-y-10">
					<div className="flex items-center space-x-5 justify-center">
						<PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-md md:text-2xl">+13104615012</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-md md:text-2xl">fafrago@gmail.com</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-md md:text-2xl">
							Los Angeles, California
						</p>
					</div>
					<div className="flex items-center space-x-5 justify-center">
						<ArrowDownOnSquareIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
						<p className="text-md md:text-2xl">
							<a href="https://github.com/fdrive422/Portfolio/blob/main/FFragoResume-SWE-2022v2.pdf">
								{" "}
								<span className="underline decoration-[#F7AB0A]/50">
									Resume Download
								</span>
							</a>
						</p>
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="flex flex-shrink-0 flex-col space-y-2 md:w-fit mx-auto">
					<div className="flex space-x-2">
						<input
							{...register("name")}
							placeholder="Name"
							className="contactInput p-3"
							type="text"
						/>
						<input
							{...register("email")}
							placeholder="Email"
							className="contactInput p-3"
							type="email"
						/>
					</div>
					<input
						{...register("subject")}
						placeholder="Subject"
						className="contactInput2 p-3"
						type="text"
					/>
					<textarea
						{...register("message")}
						placeholder="Message"
						className="contactInput2 p-3"
					/>
					<button
						type="submit"
						className="bg-[#F7AB0A] py-5 px-10 flex-shrink-0 rounded-md text-black font-bold text-lg">
						Submit
					</button>
				</form>
			</div>
		</div>
	);
}

export default ContactMe;
