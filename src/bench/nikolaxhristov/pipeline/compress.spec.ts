import pipeline from "@nikolarhristov/pipeline@0.0.10";
import { test } from "@jest/globals";

test("compress @nikolarhristov/pipeline@0.0.10", async () => {
	await new pipeline({
		path: [
			new Map([
				[
					"./samples/nikolaxhristov/pipeline/smaller-input/",
					"./samples/nikolaxhristov/pipeline/output2/",
				],
				[
					"./samples/nikolaxhristov/pipeline/smaller-input/",
					"./samples/nikolaxhristov/pipeline/output/",
				],
			]),
		],
		logger: 1,
	}).compress();
});
