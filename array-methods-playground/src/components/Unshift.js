import React from "react";

export default function Push({ nextLetter, array, setArray }) {
	const addToBeginning = () => {
		setArray([nextLetter, ...array]);
	};

	return (
		<div>
			<button
				onClick={addToBeginning}
				className="rounded border border-green-500 bg-green-400 hover:bg-green-500  px-10 py-5 text-5xl  font-bold text-white"
			>
				Unshift("{nextLetter}")
			</button>
		</div>
	);
}
