import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/slices/themeSlice";
import { Switch, FormControlLabel } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const ThemeToggle = () => {
	const dispatch = useDispatch();
	const currentTheme = useSelector((state) => state.theme);
	const theme = useTheme();

	const handleThemeChange = () => {
		dispatch(toggleTheme());
	};

	return (
		<FormControlLabel
			control={
				<Switch
					checked={currentTheme === "dark"}
					onChange={handleThemeChange}
					name="themeToggle"
					color="primary"
				/>
			}
			label={currentTheme === "light" ? "Light Mode" : "Dark Mode"}
			style={{ color: theme.palette.text.primary }}
		/>
	);
};

export default ThemeToggle;
