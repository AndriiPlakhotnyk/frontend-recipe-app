"use client";

import { useRouter } from "next/navigation";

export default function NavigationButtons() {
	const router = useRouter();

	const buttonStyle = {
		marginRight: "0.5rem",
		marginBottom: "1rem",
		padding: "0.5rem 1rem",
		backgroundColor: "#3182ce",
		color: "white",
		border: "none",
		borderRadius: "4px",
		cursor: "pointer",
	};

	return (
		<div>
			<button style={buttonStyle} onClick={() => router.back()}>
				← Back
			</button>
			<button style={buttonStyle} onClick={() => router.push("/recipes")}>
				🏠 Home
			</button>
		</div>
	);
}
