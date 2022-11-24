import { promisify } from "util";
import { exec } from "child_process";
const execP = promisify(exec);

export default async (path: string) =>
	parseInt((await execP(`du -s ${path} | cut -f1`)).stdout);
