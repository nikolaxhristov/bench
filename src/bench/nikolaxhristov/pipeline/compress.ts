import pipeline from "@nikolarhristov/pipeline";

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
