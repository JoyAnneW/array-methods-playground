import React, { useState } from "react";
import ArrayItem from "./ArrayItem";
import Push from "./Push";
import Pop from "./Pop";
import Unshift from "./Unshift";
import Shift from "./Shift";
import Splice from "./Splice";

export default function Array() {
	const [array, setArray] = useState(["A"]);
	const [arrayLength, setArrayLength] = useState(1);

	const increaseArrayLength = () => {
		setArrayLength((arrayLength) => arrayLength + 1);
	};

	// nextLetter is not caluclated based on the index of the 'array' state array because the length changes after a removal, and the next letter goes back to what it was before the removal occured
	const nextLetter = (arrayLength + 10).toString(36).toUpperCase();

	return (
		<div className="w-full">
			<div className="flex justify-center content-center gap-5">
				<div className=" text-9xl text-orange-500">[</div>
				{array.map((item, index) => {
					return (
						<div
							key={index}
							className="rounded  h-24 w-24 bg-orange-200 grid place-items-center self-end"
						>
							<ArrayItem item={item} />
							<p className="font-bold text-xl  mt-3">{index}</p>
						</div>
					);
				})}
				<div className=" text-9xl text-orange-500 ">]</div>
			</div>

			<div className="flex gap-5 mt-16">
				<Push
					nextLetter={nextLetter}
					array={array}
					setArray={setArray}
					increaseArrayLength={increaseArrayLength}
				/>
				<Unshift
					nextLetter={nextLetter}
					array={array}
					setArray={setArray}
					increaseArrayLength={increaseArrayLength}
				/>
				<Pop array={array} setArray={setArray} />
				<Shift array={array} setArray={setArray} />
			</div>
			<div className="flex gap-5 mt-5">
				<Splice array={array} setArray={setArray} />
				<Splice
					array={array}
					setArray={setArray}
					nextLetter={nextLetter}
					increaseArrayLength={increaseArrayLength}
				/>
			</div>
		</div>
	);
}
