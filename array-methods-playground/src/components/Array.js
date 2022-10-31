import React, { useState } from "react";
import ArrayItem from "./ArrayItem";
import Push from "./Push";
import Pop from "./Pop";
import Unshift from "./Unshift";
import Shift from "./Shift";

export default function Array() {
	const [array, setArray] = useState(["A"]);
	const nextLetter = (array.length + 10).toString(36).toUpperCase();

	return (
		<div className="w-full">
			<div className="flex justify-center content-center gap-5">
				<div className=" text-9xl text-orange-500">[</div>
				{array.map((item) => {
					return (
						<div
							key={item}
							className="rounded h-24 w-24 bg-orange-200 grid place-items-center self-end"
						>
							<ArrayItem item={item} />
						</div>
					);
				})}
				<div className=" text-9xl text-orange-500">]</div>
			</div>

			<div className="flex gap-5 mt-10">
				<Push nextLetter={nextLetter} array={array} setArray={setArray} />
				<Unshift nextLetter={nextLetter} array={array} setArray={setArray} />
				<Pop array={array} setArray={setArray} />
				<Shift array={array} setArray={setArray} />
			</div>
		</div>
	);
}
