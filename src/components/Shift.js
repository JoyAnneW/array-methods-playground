import React from "react";

export default function Shift({ array, setArray }) {
	const removeFromBeginning = () => {
		const poppedArray = array.filter((item, index) => index !== 0);
		if (array.length) {
			setArray(poppedArray);
		}
	};

	return (
		<div>
			<button
				onClick={removeFromBeginning}
				className={`rounded border border-green-500 bg-green-400 hover:bg-green-500  px-10 py-5 text-5xl font-bold text-white cursor ${
					!array.length && "cursor-not-allowed"
				}`}
				disabled={!array.length}
			>
				Shift
			</button>
		</div>
	);
}
