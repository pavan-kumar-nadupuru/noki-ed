// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
	reducer: {
		theme: themeReducer,
		// Add other reducers here if you have them
	},
});

export default store;
