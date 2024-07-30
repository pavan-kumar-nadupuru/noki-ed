import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";

const store = configureStore({
	reducer: {
		theme: themeReducer,
		// Add new reducers above this line
	},
});

export default store;
