import { pipeline } from "files-pipeline";

import { Configuration, Distribution, Rome } from "@rometools/js-api";
import { resolve } from "path";

import getConfig from "../../../lib/astro-community/astro-rome/lib/get-config.js";

const rome = await Rome.create({
	distribution: Distribution.NODE,
});

rome.applyConfiguration(
	JSON.parse(await getConfig("rome.json")) as Configuration
);

await new pipeline({
	path: new Map([
		[
			"./samples/lightrix/files-pipeline/",
			"./output/lightrix/files-pipeline/",
		],
	]),
	files: "**/*.{js,mjs,cjs,ts}",
	pipeline: {
		wrote: async (current) =>
			rome.formatContent(current.buffer.toString(), {
				filePath: resolve(current.inputPath),
			}).content,
		failed: async (current) =>
			`Error: Cannot format file ${current.inputPath}!`,
		accomplished: async (current) =>
			`Formatted ${current.inputPath} in ${current.outputPath}.`,
		fulfilled: async (pipe) =>
			pipe.files > 0
				? `Successfully formatted a total of ${pipe.files} JS and TS ${
						pipe.files === 1 ? "file" : "files"
				  }.`
				: false,
	},
	// rome-ignore lint/nursery/noPrecisionLoss:
	logger: 1,
}).process();
