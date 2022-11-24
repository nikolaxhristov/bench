import { jest, expect, describe, test } from "@jest/globals";

import compression from "./lib/compression.js";
import getSize from "./lib/get-size.js";

jest.setTimeout(30000000);

describe("pipeline", () => {
	test("compress but with cache", async () => {
		await compression();

		expect(
			await getSize("./samples/nikolaxhristov/pipeline/output/")
		).toBeLessThan(
			await getSize("./samples/nikolaxhristov/pipeline/input/")
		);
	});
});
