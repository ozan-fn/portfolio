"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { IconSquare, IconTriangle } from "@tabler/icons-react";

interface ShapeProps {
	icon: React.ReactNode;
	color: string;
}

const AnimatedShape: React.FC<ShapeProps> = ({ icon, color }) => {
	const controls = useAnimation();

	const animateShape = async () => {
		while (true) {
			// Target acak untuk posisi, rotasi, dan skala
			const newX = Math.random() * window.innerWidth;
			const newY = Math.random() * window.innerHeight;
			const newRotate = Math.random() * 360;
			// Skala antara 0.8 dan 1.3 agar variasi ukurannya tidak terlalu ekstrem
			const newScale = Math.random() * 0.5 + 0.8;
			// Durasi animasi antara 2 dan 5 detik
			const duration = Math.random() * 3 + 2;

			await controls.start({
				x: newX,
				y: newY,
				rotate: newRotate,
				scale: newScale,
				transition: {
					duration: duration,
					ease: "easeInOut",
				},
			});
		}
	};

	useEffect(() => {
		animateShape();
	}, [controls]);

	return (
		<motion.div style={{ position: "absolute", color: color }} animate={controls}>
			{icon}
		</motion.div>
	);
};

const RandomShapes = () => {
	// Data dengan lebih banyak bentuk dan variasi ukuran/warna
	const shapesData = [
		{ id: 1, icon: <IconSquare size={24} />, color: "#ff6f61" },
		{ id: 2, icon: <IconTriangle size={24} />, color: "#6fa8dc" },
		{ id: 3, icon: <IconSquare size={24} />, color: "#ffd166" },
		{ id: 4, icon: <IconTriangle size={24} />, color: "#06d6a0" },
		{ id: 5, icon: <IconSquare size={24} />, color: "#118ab2" },
		{ id: 6, icon: <IconTriangle size={24} />, color: "#073b4c" },
		{ id: 7, icon: <IconSquare size={24} />, color: "#ef476f" },
		{ id: 8, icon: <IconTriangle size={24} />, color: "#ffd166" },
		// Anda bisa menambahkan lebih banyak bentuk di sini
	];

	return (
		<div className="h-screen overflow-hidden relative">
			{shapesData.map((shape) => (
				<AnimatedShape key={shape.id} icon={shape.icon} color={shape.color} />
			))}
		</div>
	);
};

export default RandomShapes;
