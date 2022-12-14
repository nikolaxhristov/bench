import { pipeline as o } from "@nikolarhristov/pipeline";
import { Distribution as a, Rome as e } from "@rometools/js-api";
import { resolve as n } from "path";
import s from "../../../lib/astro-community/astro-rome/lib/get-config.js";
const i = await e.create({ distribution: a.NODE });
i.applyConfiguration(JSON.parse(await s("rome.json"))),
	await new o({
		path: new Map([
			[
				"./samples/nikolaxhristov/pipeline/",
				"./output/nikolaxhristov/pipeline/",
			],
		]),
		files: "**/*.{js,mjs,cjs,ts}",
		pipeline: {
			wrote: async (t) =>
				i.formatContent(t.buffer.toString(), {
					filePath: n(t.inputPath),
				}).content,
			failed: async (t) => `Error: Cannot format file ${t.inputPath}!`,
			accomplished: async (t) =>
				`Formatted ${t.inputPath} in ${t.outputPath}.`,
			fulfilled: async (t) =>
				t.files > 0
					? `Successfully formatted a total of ${t.files} JS and TS ${
							t.files === 1 ? "file" : "files"
					  }.`
					: !1,
		},
		logger: 1,
	}).process();
