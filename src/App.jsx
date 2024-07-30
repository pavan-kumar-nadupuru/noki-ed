// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import TodoListPage from "./pages/TodoList";
import "./App.scss";

const theme = createTheme({
	palette: {
		primary: {
			main: "#1976d2",
		},
		secondary: {
			main: "#dc004e",
		},
	},
});

function App() {
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
								<Route path="/todos" element={<TodoListPage />} />
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
