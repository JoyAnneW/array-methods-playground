import React from "react";

export default function Splice({ array, setArray, nextLetter = "" }) {
	const spliceArray = () => {
		const arrayCopy = [...array];
		// splice mutates arrayCopy, return value is an array with item removed
		const splicedArray = arrayCopy.splice(1, 1);
		setArray(arrayCopy);
	};
	return (
		<div>
			<button
				onClick={spliceArray}
				className="rounded border border-green-500 bg-green-400 hover:bg-green-500  px-10 py-5 text-5xl  font-bold text-white"
			>
				{nextLetter ? 'Splice(1, 1, `"${nextLetter}"`)' : "Splice(1, 1)"}
			</button>
		</div>
	);
}
