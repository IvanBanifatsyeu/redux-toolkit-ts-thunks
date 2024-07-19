import React, { useRef, useReducer } from "react";
import { useAppDispatch } from "../store/store";
import { addPerson } from "../store/features/personSlice";

const Add = () => {
	const name = useRef<string>("");
	const dispatch = useAppDispatch();

	return (
		<form
			className="border rounded-md p-2 shadow-md m-2"
			onSubmit={(e) => e.preventDefault()}
		>
			<label htmlFor="">person Name:</label>
			<input
				className="border rounded-md p-2 mx-2"
				onChange={(e) => (name.current = e.target.value)}
			/>
			<button
				className="bg-violet-500  text-white rounded-md px-4 py-2 cursor-pointer hover:bg-violet-600 active:bg-violet-700"
				onClick={() => dispatch(addPerson({ name: name.current }))}
			>
				Add
			</button>
			<div>{`${name.current}`}</div>
		</form>
	);
};

export default Add;
