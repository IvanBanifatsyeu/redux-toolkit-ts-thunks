import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Person {
	id: number;
	name: string;
}

interface PersonState {
	persons: Person[];
}

const initialState: PersonState = {
	persons: [],
};

export const fetchPerson = createAsyncThunk(
	"person/fetching",
	async (thunkAPI) => {
		const response = await fetch("https://jsonplaceholder.typicode.com/users", {
			method: "GET",
		});
		const data = response.json();
		return data;
	}
);

export const PersonSlice = createSlice({
	name: "person",
	initialState,
	reducers: {
		addPerson: (state, action: PayloadAction<{ name: string }>) => {
			state.persons.push({
				id: state.persons.length + 1,
				name: action.payload.name,
			});
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchPerson.fulfilled, (state, action) => {
			state.persons = action.payload;
		});
	},
});

export default PersonSlice.reducer;
export const { addPerson } = PersonSlice.actions;

