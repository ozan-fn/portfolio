import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Home() {
	return (
		<div className="ml-8 flex h-full px-4 py-20 md:ml-20 md:px-0">
			<div className="relative flex h-fit w-full max-w-xs flex-col gap-2 sm:max-w-sm md:max-w-md lg:max-w-3xl">
				<ReactTyped cursorChar="" className="select-none font-gagalin text-4xl md:text-5xl lg:text-6xl" strings={["AKHMAD FAUZAN"]} typeSpeed={100} />
				<ReactTyped className="font-bold underline" loop typeSpeed={32} strings={["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "Firebase", "Docker", "Linux", "Full Stack Development", "Laravel", "Next.js", "PHP"]} />
				<motion.div animate={{ height: ["0%", "110%"] }} transition={{ duration: 5.5, type: "spring" }} className="absolute -left-6 h-full w-2 rounded-l-md bg-gray-300" />
				<ReactTyped
					typeSpeed={1}
					cursorChar=""
					strings={[
						"Selamat datang di portfolio saya! Saya Akhmaad Fauzan, seorang web developer yang bersemangat dan selalu update dengan teknologi terbaru. Dengan latar belakang di teknologi informasi, saya ahli dalam pengembangan front-end dan back-end, termasuk HTML, CSS, JavaScript, Node.js, Express.js, React.js, dan Firebase. Proyek terbaru saya adalah aplikasi web yang responsif dan dinamis, menunjukkan kemampuan saya dalam pengembangan web. Tujuan karir saya adalah menjadi pengembang web yang kompeten dan inovatif, dengan fokus pada aplikasi web efisien dan user-friendly. Selain itu, saya memiliki hobi dalam fotografi dan desain grafis.",
					]}
					className="font-mono italic"
				/>
			</div>
		</div>
	);
}
