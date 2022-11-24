import * as fs from "fs";
import pipeline from "@nikolarhristov/pipeline";
import { expect, describe, test } from "@jest/globals";
import { promisify } from "util";
import { exec } from "child_process";

const execP = promisify(exec);

jest.setTimeout(30000000);

describe("compression", () => {
	test("smaller directory", async () => {
		await new pipeline({
			path: new Map([
				[
					"./samples/nikolaxhristov/pipeline/input",
					"./samples/nikolaxhristov/pipeline/output",
				],
			]),
		}).compress();

		expect(
			parseInt(
				(
					await execP(
						"du -s ./samples/nikolaxhristov/pipeline/output/ | cut -f1"
					)
				).stdout
			)
		).toBeLessThan(
			parseInt(
				(
					await execP(
						"du -s ./samples/nikolaxhristov/pipeline/input/ | cut -f1"
					)
				).stdout
			)
		);
	});
});
