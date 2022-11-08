import React from "react";

export default function Pop({ array, setArray }) {
	const removeFromEnd = () => {
		const poppedArray = array.filter(
			(item, index) => index !== array.length - 1
		);
		if (array.length) {
			setArray(poppedArray);
		}
	};
	const addBorder = () => {
		const newArray = array.map((item, index) => {
			if (index === array.length - 1) {
				return { ...item, hasExitBorder: true };
			}
			return item;
		});
		setArray(newArray);
		console.log({ newArray });
		setTimeout(() => {
			console.log("Delayed for 5 seconds.");
			removeFromEnd();
		}, 1000);
	};

	return (
		<div>
			<button
				onClick={addBorder}
				className={`rounded border border-green-500 bg-green-400 hover:bg-green-500  px-10 py-5 text-5xl font-bold text-white cursor ${
					!array.length && "cursor-not-allowed"
				}`}
				disabled={!array.length}
			>
				Pop
			</button>
		</div>
	);
}
