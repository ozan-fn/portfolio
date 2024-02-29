import { LuMenu, LuTrees } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function MenuDropdown({ tabs, activeTab, setActiveTab }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative ml-auto md:hidden">
            <motion.button type="button" transition={{ type: "spring" }} whileTap={{ scale: 1.2 }} onClick={() => setOpen(!open)} className="rounded-lg p-2">
                {!open && <LuMenu className="h-6 w-6 text-gray-300" />}
                {open && <LuTrees className="h-6 w-6 text-gray-300" />}
            </motion.button>

            <AnimatePresence mode="wait">
                {open && (
                    <div className="absolute right-0 overflow-hidden">
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="flex w-56 flex-col rounded-lg border border-gray-600 bg-gray-800 p-2">
                            {tabs.map((v, i) => {
                                const isActive = activeTab == v.id;
                                return (
                                    <div key={i} className="relative select-none">
                                        {isActive && (
                                            <motion.div layoutId="2" transition={{ type: "spring" }} className="absolute -left-2 top-0 flex h-full w-full flex-row overflow-hidden rounded-e-lg">
                                                <div className="h-full w-1 bg-gray-300" />
                                                <div className="h-full w-full bg-gray-600" />
                                            </motion.div>
                                        )}
                                        <p onClick={() => setActiveTab(v.id)} className="font-gagalin relative rounded-md px-2.5 py-1.5 text-gray-300">
                                            {v.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
