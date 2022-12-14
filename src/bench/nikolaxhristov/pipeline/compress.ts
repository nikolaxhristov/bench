import { pipeline } from "@nikolarhristov/pipeline";

await new pipeline({
	path: new Map([
		[
			"./samples/nikolaxhristov/pipeline/",
			"./output/nikolaxhristov/pipeline/",
		],
	]),
	// rome-ignore lint/nursery/noPrecisionLoss:
	logger: 1,
}).compress();
