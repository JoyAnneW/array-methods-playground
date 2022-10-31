import React, { useState } from "react";
import ArrayItem from "./ArrayItem";
import Push from "./Push";

export default function Array() {
	const [array, setArray] = useState(["A", "B"]);
	console.log(setArray);
	// const addToEnd = () => {};

	return (
		<div>
			<div className="flex justify-center content-center  gap-5">
				<div className=" text-9xl text-orange-500">[</div>
				{array.map((item) => {
					return (
						<div className="rounded h-24 w-24 bg-orange-200 grid place-items-center self-end">
							<ArrayItem item={item} />
						</div>
					);
				})}
				<div className=" text-9xl text-orange-500">]</div>
			</div>

			<Push />
		</div>
	);
}
