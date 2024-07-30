import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Dashboard />} />
		<Route path="/about" element={<About />} />
		<Route path="*" element={<NotFound />} />
	</Routes>
);

export default AppRoutes;
