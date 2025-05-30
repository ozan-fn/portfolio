import { motion } from "framer-motion";

export default function Contact() {
	return (
		<>
			<div className="mb-20 ml-8 mr-4 flex flex-col py-20 md:ml-20">
				<p className="font-gagalin text-4xl text-gray-300/50 md:text-5xl lg:text-6xl">CONTACT</p>
				<motion.a whileTap={{ scale: 1.25 }} href="mailto:ozan6825@gmail.com" className="mt-6 w-fit rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 font-gagalin text-gray-300 focus:border-0 focus:ring-0">
					SEND AN EMAIL
				</motion.a>

				{/* <div className="mt-6 rounded-lg border border-gray-600 bg-gray-800 p-4">
                    <div className="flex flex-col gap-2">
                        <p className="font-sans">Name</p>
                        <input type="text" className="rounded-lg border border-gray-600 bg-gray-800 px-1.5 py-1 ring-gray-600" />
                        <p className="font-sans">Email Address</p>
                        <input type="text" className="rounded-lg border border-gray-600 bg-gray-800 px-1.5 py-1 ring-gray-600" />
                        <p className="font-sans">Message</p>
                        <textarea type="text" rows={6} className="rounded-lg border border-gray-600 bg-gray-800 px-1.5 py-1 ring-gray-600" />

                        <motion.button whileTap={{ scale: 1.025 }} className="mt-6 rounded-lg border border-gray-600 bg-gray-900 px-3 py-2 font-gagalin text-gray-300 focus:border-0 focus:ring-0">
                            SEND
                        </motion.button>
                    </div>
                </div> */}
			</div>
		</>
	);
}
