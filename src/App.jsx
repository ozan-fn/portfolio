import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { LuMenu, LuTrees } from "react-icons/lu";
import Home from "./components/Home";
import MenuDropdown from "./components/MenuDropdown";

const tabs = [
    { id: 1, label: "Home" },
    { id: 2, label: "About" },
    { id: 3, label: "Skill" },
    { id: 4, label: "Project" },
    { id: 5, label: "Contact" },
];

export default function App() {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <>
            <div className="flex h-screen min-h-screen flex-col overflow-x-hidden bg-gray-900">
                <div className="container mx-auto flex h-16 flex-row items-center rounded-lg border-b border-gray-600 px-4">
                    <p className="font-gagalin text-2xl text-gray-300">PORTFOLIO</p>

                    <div className="relative ml-auto hidden text-gray-300 md:block">
                        <div className="font-gagalin grid select-none grid-flow-col grid-cols-5 gap-8">
                            {tabs.map((v, i) => {
                                const isActive = activeTab == v.id;
                                return (
                                    <div key={i} className="cursor-pointer" onClick={() => setActiveTab(v.id)}>
                                        <p>{v.label}</p>
                                        {isActive && <motion.div transition={{ type: "spring" }} layoutId="1" className="absolute h-1 w-8 rounded-full bg-gray-300" />}
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
                        {activeTab == "1" && <Home />}
                        {activeTab == "2" && <p>TAB 22222</p>}
                    </motion.div>
                </div>
            </div>
        </>
    );
}
