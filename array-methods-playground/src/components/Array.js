import React, { useState } from "react";
import ArrayItem from "./ArrayItem";
export default function Array() {
	const [array, setArray] = useState(["A"]);

	const addToEnd = () => {};

	return (
		<div className="flex gap-5">
			<div className=" text-9xl text-orange-500">[</div>

			<div className=" text-9xl text-orange-500">]</div>
		</div>
	);
}
