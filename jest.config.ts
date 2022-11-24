import type { JestConfigWithTsJest } from "ts-jest";

export default (): JestConfigWithTsJest => ({
	preset: "ts-jest/presets/js-with-ts",
	rootDir: "./",
	roots: ["<rootDir>"],
	clearMocks: true,
	testEnvironment: "node",
	extensionsToTreatAsEsm: [".jsx", ".ts", ".tsx", ".mts"],
	moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
	transform: {
		"^.+\\.[tj]sx?$": [
			"ts-jest",
			{
				useESM: true,
				tsconfig: "tsconfig.json",
				diagnostics: false,
			},
		],
	},
	resolver: "ts-jest-resolver",
	transformIgnorePatterns: [
		"<rootDir>/node_modules/",
		"/node_modules/",
		"node_modules",
		"tests",
	],
});
