import { SiAlpinelinux, SiCss3, SiDocker, SiFramer, SiGithub, SiGo, SiHtml5, SiJavascript, SiLaravel, SiLinux, SiLinuxmint, SiMongodb, SiMysql, SiNodedotjs, SiPhp, SiPortainer, SiPrisma, SiReact, SiTypescript, SiUbuntu, SiVuedotjs } from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";

const icons = [
	{ label: "React", icon: <SiReact className="h-20 w-20 text-[#61DAFB]" /> },
	{ label: "Vue.js", icon: <SiVuedotjs className="h-20 w-20 text-[#42B883]" /> },
	{ label: "Docker", icon: <SiDocker className="h-20 w-20 text-[#2496ED]" /> },
	{ label: "Linux", icon: <SiLinux className="h-20 w-20 text-[#000000] invert" /> },
	{ label: "HTML5", icon: <SiHtml5 className="h-20 w-20 text-[#E34F26]" /> },
	{ label: "CSS3", icon: <SiCss3 className="h-20 w-20 text-[#1572B6]" /> },
	{ label: "Node.js", icon: <SiNodedotjs className="h-20 w-20 text-[#8CC84B]" /> },
	{ label: "Go", icon: <SiGo className="h-20 w-20 text-[#00ADD8]" /> },
	{ label: "PHP", icon: <SiPhp className="h-20 w-20 text-[#777BB4]" /> },
	{ label: "JavaScript", icon: <SiJavascript className="h-20 w-20 text-[#F7DF1E]" /> },
	{ label: "TypeScript", icon: <SiTypescript className="h-20 w-20 text-[#3178C6]" /> },
	{ label: "Framer", icon: <SiFramer className="h-20 w-20 text-[#0055FF]" /> },
	{ label: "Laravel", icon: <SiLaravel className="h-20 w-20 text-[#FF2D20]" /> },
	{ label: "MySQL", icon: <SiMysql className="h-20 w-20 text-[#4479A1]" /> },
	{ label: "MongoDB", icon: <SiMongodb className="h-20 w-20 text-[#47A248]" /> },
	{ label: "Prisma", icon: <SiPrisma className="h-20 w-20 text-[#1A202C] invert" /> },
	{ label: "Portainer", icon: <SiPortainer className="h-20 w-20 text-[#40B3CF]" /> },
	{ label: "Alpine Linux", icon: <SiAlpinelinux className="h-20 w-20 text-[#0D597F]" /> },
	{ label: "Ubuntu", icon: <SiUbuntu className="h-20 w-20 text-[#E95420]" /> },
	{ label: "Linux Mint", icon: <SiLinuxmint className="h-20 w-20 text-[#87CF3E]" /> },
	{ label: "GitHub", icon: <SiGithub className="h-20 w-20 text-[#181717] invert" /> },
];

export default function Skill() {
	return (
		<>
			<div className="mb-20 ml-8 mr-4 pt-20 md:ml-20">
				<div className="flex flex-col">
					<p className="font-gagalin text-4xl text-gray-300/50 md:text-5xl lg:text-6xl">SKILLS?</p>
					<div className="flex flex-row flex-wrap justify-center gap-16 pt-20">
						{icons.map((v, i) => (
							<div key={i} className="flex w-28 flex-col items-center gap-1">
								<motion.div animate={{ y: ["50%", "0%"], opacity: [0, 1] }} transition={{ type: "spring", delay: i / 10 }}>
									{v.icon}
								</motion.div>
								<motion.p animate={{ y: ["200%", "0%"], opacity: [0, 1] }} transition={{ type: "spring", delay: i / 10 }} className="font-gagalin">
									{v.label}
								</motion.p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
