import * as fs from "fs";

import compression from "./lib/compression.js";

export default async () => {
	try {
		await fs.promises.rm("./samples/nikolaxhristov/pipeline/output/", {
			recursive: true,
		});
	} catch (_error) {}

	await compression();
};
