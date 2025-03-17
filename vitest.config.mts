import { defineConfig, configDefaults } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [tsconfigPaths(), react()],
	test: {
		environment: "jsdom",
		testTimeout: 10000,
		reporters: ["verbose"],
		dir: "./tests",
		globals: true,
		exclude: [...configDefaults.exclude],
		coverage: {
			provider: "v8",
			reporter: ["text"],
			exclude: [
				...configDefaults.exclude,
				"**/ports/**",
				".next",
				"**.config.**",
			],
			thresholds: {
				branches: 80,
				functions: 80,
				lines: 80,
				statements: 80,
			},
		},
		setupFiles: ["./tests/config/setupTests.ts"],
	},
});
