#!/usr/bin/env node

// Ensure environment variables are read.
import "./../config/env.js";

import rspack from "@rspack/core";
import chalk from "chalk";

// import fs from "fs-extra";
// import checkRequiredFiles from "react-dev-utils/checkRequiredFiles.js";
// import printBuildError from "react-dev-utils/printBuildError.js";

import config from "../config/rspack.config.dev.js";

process.on("unhandledRejection", (err) => {
	throw err;
});


function startToBuild(onBuildSuccessCb = () => {}) {
	// const packageJson = paths.appPackageJson;
	// const appName = packageJson.name;
	// const kind = "web";
	// function copyPublicFolder() {
	// 	fs.copySync(
	// 		paths.appPublic,
	// 		paths.localBucketPath + `/static/${appName}/${kind}/_`,
	// 		{
	// 			dereference: true,
	// 			filter: (file) => file !== paths.appHtml
	// 		}
	// 	);
	// }

	// First, read the current file sizes in build directory.
	// This lets us display how much they changed later.
	build().then(
		({ stats, previousFileSizes, warnings }) => {
			if (warnings.length) {
				console.log(chalk.yellow("Compiled with warnings.\n"));
			} else {
				console.log(chalk.green("Compiled successfully.\n"));
			}
			// copyPublicFolder();
			onBuildSuccessCb();
		},
		(err) => {
			console.log(chalk.red("Failed to compile.\n"), err),
				"\t\t\t____________\n";
			// printBuildError(err);
			process.exit(1);
		}
	);

	// Create the development build and print the deployment instructions.
}

async function build(previousFileSizes) {
	console.log("Creating an optimized developed build...");

	const compiler = await rspack(config);
	return new Promise((resolve, reject) => {
		compiler.run((err, stats) => {
			if (err) {
				return reject(err);
			}

			let statsJson = stats.toJson();
			stats.errors = statsJson.errors || [];
			stats.warnings = statsJson.warnings || [];

			const messages = {};
			messages.errors = stats.errors.map((error) => {
				return `${error.moduleName} \n ${error.message}`;
			});
			messages.warnings = stats.warnings.map((warning) => {
				return `${warning.moduleName} \n ${warning.message}`;
			});
			if (messages.errors.length) {
				// Only keep the first error. Others are often indicative
				// of the same problem, but confuse the reader with noise.
				if (messages.errors.length > 1) {
					messages.errors.length = 1;
				}
				return reject(new Error(messages.errors.join("\n\n")));
			}

			return resolve({
				stats,
				warnings: messages.warnings
			});
		});
	});
}

console.log("************ triggering build ************");
startToBuild();
