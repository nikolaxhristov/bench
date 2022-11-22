import * as fs from "fs";
import pipeline from "@nikolarhristov/pipeline";

jest.setTimeout(300000000);

test("compression", async () => {
	try {
		await fs.promises.rm("./samples/nikolaxhristov/pipeline/output/", {
			recursive: true,
		});
	} catch (_error) {}

	expect(
		await new pipeline({
			path: new Map([
				[
					"./samples/nikolaxhristov/pipeline/input",
					"./samples/nikolaxhristov/pipeline/output",
				],
			]),
		}).compress()
	);

	// await expect(
	// 	await new compress({
	// 		path: new Map([
	// 			["./src/test/sample/input", "./src/test/sample/output"],
	// 		]),
	// 		logger: 2,
	// 	}).compress()
	// );
});
