import pipeline from "@nikolarhristov/pipeline";

export default async () =>
	await new pipeline({
		path: new Map([
			[
				"./samples/nikolaxhristov/pipeline/smaller-input/",
				"./samples/nikolaxhristov/pipeline/output/",
			],
		]),
	}).compress();
