import Header from "@/components/shared/Header";
import React from "react";

export default function layout(props: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{props.children}
		</>
	);
}
