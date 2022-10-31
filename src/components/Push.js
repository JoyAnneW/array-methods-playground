import React from "react";

export default function Push({ nextLetter, array, setArray }) {
	const addToEnd = () => {
		setArray([...array, nextLetter]);
	};

	return (
		<div>
			<button
				onClick={addToEnd}
				className="rounded border border-green-500 bg-green-400 hover:bg-green-500  px-10 py-5 text-5xl  font-bold text-white"
			>
				Push("{nextLetter}")
			</button>
		</div>
	);
}
