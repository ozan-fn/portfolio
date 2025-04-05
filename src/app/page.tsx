"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import MenuDropdown from "@/components/MenuDropdown";
import Skill from "@/components/Skill";
import { motion } from "framer-motion";
import { useState } from "react";

const tabs = [
	{ id: 1, label: "Home" },
	{ id: 2, label: "About" },
	{ id: 3, label: "Skill" },
	// { id: 4, label: "Project" },
	{ id: 5, label: "Contact" },
];

export default function App() {
	const [activeTab, setActiveTab] = useState(1);

	return (
		<>
			<div className="flex h-screen min-h-screen flex-col overflow-x-hidden bg-gray-900 antialiased">
				<div className="container sticky top-0 z-50 mx-auto flex min-h-16 flex-row items-center rounded-lg border-b border-gray-600 bg-gray-900 px-4 backdrop-blur-sm">
					<p className="font-gagalin text-2xl text-gray-300">PORTFOLIO</p>

					<div className="relative ml-auto hidden text-gray-300 md:block">
						<div className="grid select-none grid-flow-col grid-cols-5 gap-8 font-gagalin">
							{tabs.map((v, i) => {
								const isActive = activeTab == v.id;
								return (
									<div key={i} className="cursor-pointer" onClick={() => setActiveTab(v.id)}>
										<p>{v.label}</p>
										{isActive && <motion.div transition={{ type: "spring" }} layoutId="1" className="absolute h-1 w-6 rounded-full bg-gray-300" />}
									</div>
								);
							})}
						</div>
					</div>

					<MenuDropdown tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
				</div>
				{/* HALAMAN UTAMA */}
				<div className="flex flex-grow flex-row">
					<motion.div key={activeTab} animate={{ opacity: [0, 1] }} exit={{ opacity: [1, 0] }} transition={{ type: "spring" }} className="container mx-auto flex-grow text-gray-300">
						{activeTab === 1 && <Home />}
						{activeTab === 2 && <About />}
						{activeTab === 3 && <Skill />}
						{activeTab === 5 && <Contact />}
					</motion.div>
				</div>
			</div>
		</>
	);
}
