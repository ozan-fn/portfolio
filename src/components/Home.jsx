import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <div className="flex h-full items-center justify-center px-4 md:px-0">
            <div className="relative flex h-fit flex-col rounded-l-sm">
                <ReactTyped className="font-gagalin select-none text-4xl md:text-5xl lg:text-6xl" strings={["AKHMAD FAUZAN"]} typeSpeed={100} />
                <p>Full Stack Engineer</p>
                <motion.div animate={{ height: ["0%", "100%"] }} transition={{ duration: 3.5, type: "spring" }} className="absolute -left-6 h-full w-2 bg-gray-300" />
            </div>
        </div>
    );
}
