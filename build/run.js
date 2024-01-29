import path from "path";
import { exec, execSync } from "child_process";
import fs from "fs-extra";

import { parseArgs, getServices } from "./utils.js";

const args = parseArgs(process.argv);
let currentlyRunningBuild = {};

const __dirname = path.dirname(new URL(import.meta.url).pathname);

let relativePath = "..";
const CHUNK_SIZE = 4;

async function start() {
	let allServices = getServices();

	let servicesToRun = (args.service || "").split(",").filter(Boolean);

	exec(`mkdir localBucket`, {
		cwd: path.join(__dirname, relativePath)
	});

	//cleaning existing local bucket folder
	fs.emptyDirSync(path.join(__dirname, relativePath, `localBucket`));

	async function processChunks(chunk) {
		const buildPromises = [];
		chunk.forEach((serviceName) => {
			buildPromises.push(triggerBuild(serviceName));
		});
		await Promise.all(buildPromises); // Wait for all builds in the current chunk to complete
	}

	for (let i = 0; i < servicesToRun.length; i += CHUNK_SIZE) {
		const chunk = servicesToRun.slice(i, i + CHUNK_SIZE);
		await processChunks(chunk); // Process the current chunk concurrently
	}
}

function triggerBuild(service, kind = "web") {
	return new Promise(async (resolve, reject) => {
		const serverExec = exec(`node ../../build/scripts/rsbuild.js`, {
			cwd: path.join(__dirname, relativePath, service, kind)
		});

		serverExec.stdout.on("data", (...e) => {
			console.log("Compiling :: ", ...e);
			if (
				e.join("").includes("Compiled with") ||
				e.join("").includes("Compiled successfully")
			) {
				currentlyRunningBuild = {
					...currentlyRunningBuild,
					[`${service}-${kind}`]: false
				};
				if (service === "app") {
					execSync(
						`cp -rf ${path.join(
							__dirname,
							relativePath,
							"localBucket/static/app",
							kind
						)}/_/index.html ${`../localBucket/${kind}.index.html`}`,
						{
							cwd: path.join(__dirname)
						}
					);
				}

				resolve();
			}
		});

		serverExec.stderr.on("data", (...e) => {
			console.log("Compilation error :: ", ...e);
			if (
				e.join("").includes("Compiled with") ||
				e.join("").includes("Compiled successfully")
			) {
				resolve();
			}
		});

		// killing existing running build
		if (currentlyRunningBuild[`${service}-${kind}`]) {
			currentlyRunningBuild[`${service}-${kind}`].kill();
		}
		currentlyRunningBuild = {
			...currentlyRunningBuild,
			[`${service}-${kind}`]: serverExec
		};
	});
}

start();
