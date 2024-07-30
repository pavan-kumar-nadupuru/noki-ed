// src/components/Welcome.jsx
import React from "react";

const Welcome = ({ name }) => {
	return (
		<div className="welcome">
			<h1>Welcome to Vite + React!</h1>
			<p>Hello, {name}! This is a simple component.</p>
		</div>
	);
};

export default Welcome;
