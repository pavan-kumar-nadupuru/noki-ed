// src/components/Navigation.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
	<nav className="navbar navbar-expand-lg navbar-light bg-light">
		<div className="container">
			<Link className="navbar-brand" to="/">
				My App
			</Link>
			<div className="navbar-nav">
				<Link className="nav-item nav-link" to="/">
					Dashboard
				</Link>
				<Link className="nav-item nav-link" to="/about">
					About
				</Link>
			</div>
		</div>
	</nav>
);

export default Navigation;
