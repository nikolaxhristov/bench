import pipeline from "@nikolarhristov/pipeline";

await new pipeline({
	path: new Map([
		[
			"./samples/nikolaxhristov/pipeline/",
			"./output/nikolaxhristov/pipeline/",
		],
	]),
}).compress();
