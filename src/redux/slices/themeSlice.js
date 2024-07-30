// src/redux/slices/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
	name: "theme",
	initialState: "light",
	reducers: {
		toggleTheme: (state) => (state === "light" ? "dark" : "light"),
		setTheme: (state, action) => action.payload,
	},
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
