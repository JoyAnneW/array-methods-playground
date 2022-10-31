import React from "react";

export default function Splice({ array, setArray, nextLetter = "" }) {
	const spliceArray = () => {
		const splicedArray = [...array].splice(1, 1);
		// console.log({ splicedArray });
	};

	return (
		<div>
			<button
				onClick={spliceArray}
				className="rounded border border-green-500 bg-green-400 hover:bg-green-500  px-10 py-5 text-5xl  font-bold text-white"
			>
				Splice(1, 1, "{nextLetter}")
			</button>
		</div>
	);
}
