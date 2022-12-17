import { pipeline } from "files-pipeline";

await new pipeline({
	path: new Map([
		[
			"./samples/lightrix/files-pipeline/",
			"./output/lightrix/files-pipeline/",
		],
	]),
	// rome-ignore lint/nursery/noPrecisionLoss:
	logger: 1,
}).compress();
