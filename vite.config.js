import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command, mode }) => {
	// Load env file based on `mode` in the current working directory.
	// Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
	const env = loadEnv(mode, process.cwd(), "");

	// Create an object with all non-VITE_ prefixed env variables
	const processEnv = Object.entries(env).reduce((acc, [key, val]) => {
		if (!key.startsWith("VITE_")) {
			acc[`process.env.${key}`] = JSON.stringify(val);
		}
		return acc;
	}, {});

	return {
		plugins: [react()],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@import "./src/styles/variables";`,
				},
			},
		},
		resolve: {
			alias: [
				{
					find: /^~(.*)$/,
					replacement: "$1",
				},
			],
		},
		server: {
			historyApiFallback: true,
		},
		// Automatically expose all non-VITE_ variables
		define: processEnv,
	};
});
