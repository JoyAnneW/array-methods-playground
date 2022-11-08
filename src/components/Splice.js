import React from "react";

export default function Splice({
	array,
	setArray,
	nextLetter,
	increaseArrayLength,
}) {
	const spliceArray = () => {
		const arrayCopy = [...array];

		if (nextLetter) {
			increaseArrayLength();
			arrayCopy.splice(1, 1, { letter: nextLetter, hasExitBorder: false });
		} else {
			arrayCopy.splice(1, 1);
		}
		setArray(arrayCopy);
	};
	return (
		<div>
			<button
				onClick={spliceArray}
				className="rounded border border-green-500 bg-green-400 hover:bg-green-500  px-10 py-5 text-5xl  font-bold text-white"
			>
				{nextLetter ? `Splice(1, 1, "${nextLetter}")` : "Splice(1, 1)"}
			</button>
		</div>
	);
}
