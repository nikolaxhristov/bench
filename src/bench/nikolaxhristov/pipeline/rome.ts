import pipeline from "@nikolarhristov/pipeline";
import type {
	optionCallbacksFile,
	optionCallbacksPipe,
} from "@nikolarhristov/pipeline/dist/options/index.js";

import { BackendKind, Rome } from "@rometools/js-api";
import { resolve } from "path";

import getConfig from "../../../lib/astro-community/astro-rome/lib/get-config.js";

const rome = await Rome.create({
	backendKind: BackendKind.NODE,
});

await rome.applyConfiguration(JSON.parse(await getConfig("rome.json")));

await new pipeline({
	path: new Map([
		[
			"./samples/nikolaxhristov/pipeline/",
			"./output/nikolaxhristov/pipeline/",
		],
	]),
	files: "**/*.{js,mjs,cjs,ts}",
	pipeline: {
		wrote: async (file: string, data: string) =>
			(
				await rome.formatContent(data, {
					filePath: resolve(file),
				})
			).content,
		failed: async (inputPath: optionCallbacksFile["inputPath"]) =>
			`Error: Cannot format file ${inputPath} !`,
		accomplished: async (
			inputPath: optionCallbacksFile["inputPath"],
			outputPath: optionCallbacksFile["outputPath"],
			_fileSizeBefore: optionCallbacksFile["fileSizeBefore"],
			_fileSizeAfter: optionCallbacksFile["fileSizeAfter"]
		) => `Formatted ${inputPath} in ${outputPath}.`,
		fulfilled: async (pipe: optionCallbacksPipe) =>
			`Successfully formatted a total of ${pipe.files} JS and TS ${
				pipe.files === 1 ? "file" : "files"
			}.`,
	},
}).process();
