import type { JestConfigWithTsJest } from "ts-jest";

export default {
	clearMocks: true,
	preset: "ts-jest/presets/js-with-ts",
	testEnvironment: "node",
	resolver: "ts-jest-resolver",
	rootDir: "./dist",
	transform: {
		"^.+\\.m?[tj]sx?$": [
			"ts-jest",
			{
				diagnostics: false,
			},
		],
	},
	transformIgnorePatterns: ["<rootDir>/node_modules/"],
} satisfies JestConfigWithTsJest;
