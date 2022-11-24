import pipeline from "@nikolarhristov/pipeline";

export default async () =>
	await new pipeline({
		path: new Map([
			[
				"./samples/nikolaxhristov/pipeline/input/",
				"./samples/nikolaxhristov/pipeline/output/",
			],
		]),
		logger: 1,
	}).compress();
