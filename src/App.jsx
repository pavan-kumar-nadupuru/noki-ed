import React, { useMemo, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import "./App.scss";

function App() {
	const themeMode = useSelector((state) => state.theme);

	const theme = useMemo(
		() =>
			createTheme({
				palette: {
					mode: themeMode,
					primary: {
						main: themeMode === "light" ? "#1976d2" : "#90caf9",
					},
					secondary: {
						main: themeMode === "light" ? "#dc004e" : "#f48fb1",
					},
					background: {
						default: themeMode === "light" ? "#f5f5f5" : "#303030",
						paper: themeMode === "light" ? "#ffffff" : "#424242",
					},
				},
			}),
		[themeMode],
	);

	const [sidebarOpen, setSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setSidebarOpen(!sidebarOpen);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Router>
				<div
					className={`app-container d-flex ${sidebarOpen ? "sidebar-open" : ""}`}
				>
					<Sidebar />
					<div className="content-wrapper flex-grow-1">
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={toggleSidebar}
							className="d-md-none sidebar-toggle"
						>
							<MenuIcon />
						</IconButton>
						<main className="main-content">
							<Routes>
								<Route path="/" element={<Dashboard />} />
								<Route path="/about" element={<About />} />
							</Routes>
						</main>
						<footer className="app-footer">
							<p>© 2024 {import.meta.env.VITE_APP_NAME}</p>
						</footer>
					</div>
				</div>
			</Router>
		</ThemeProvider>
	);
}

export default App;
