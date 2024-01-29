import { readFileSync } from "fs";

export const parseArgs = (args) => {
	const argObj = {};
	args.forEach((arg) => {
		if (arg.includes("=")) {
			const [argName, argValue] = arg.split("=");
			argObj[argName] = argValue;
		} else {
			argObj[arg] = true;
		}
	});
	return argObj;
};

export const getServices = (cliArgs = {}, rcPath) => {
	const service = cliArgs.service || "all";
	return service === "all"
		? readFileSync(rcPath || "./.services.rc")
				.toString()
				.split(/\r?\n/)
				.filter((value) => Boolean(value.trim()))
		: (service || "").split(",").filter(Boolean);
};
