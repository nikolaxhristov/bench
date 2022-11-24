import * as fs from "fs";
import pipeline from "@nikolarhristov/pipeline";
import { expect, describe, test } from "@jest/globals";
import { promisify } from "util";
import { exec } from "child_process";

const execP = promisify(exec);

jest.setTimeout(30000000);

const compress = async () => {
	await new pipeline({
		path: new Map([
			[
				"./samples/nikolaxhristov/pipeline/input",
				"./samples/nikolaxhristov/pipeline/output",
			],
		]),
	}).compress();
};

const getSize = async (path: string) =>
	parseInt((await execP(`du -s ${path} | cut -f1`)).stdout);

describe("pipeline", () => {
	test("compress", async () => {
		try {
			await fs.promises.rm("./samples/nikolaxhristov/pipeline/output/", {
				recursive: true,
			});
		} catch (_error) {}

		await compress();

		expect(
			await getSize("./samples/nikolaxhristov/pipeline/output")
		).toBeLessThan(
			await getSize("./samples/nikolaxhristov/pipeline/input")
		);
	});

	test("compress but with cache", async () => {
		await compress();

		expect(
			await getSize("./samples/nikolaxhristov/pipeline/output")
		).toBeLessThan(
			await getSize("./samples/nikolaxhristov/pipeline/input")
		);
	});
});
