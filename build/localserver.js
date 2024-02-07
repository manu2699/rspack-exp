import path from "node:path";
import https from "https";
import fs from "fs";
import handler from "serve-handler";
import { createProxyMiddleware } from "http-proxy-middleware";
import { parseArgs } from "./utils.js";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

const startLocalServer = (remoteServices = []) => {
	try {
		let args = parseArgs(process.argv);
		const relativePath = "..";
		const localBucket = path.join(__dirname, relativePath, "localBucket");
		const env = args.env || "tst";
		const apiProxy =
			args.apiproxy || `https://localhost.${env}.zingworks.com`;
		const apiHost = new URL(apiProxy).hostname;

		const apiProxyMiddleware = createProxyMiddleware({
			target: apiProxy,
			changeOrigin: true,
			router: {
				"dev.localhost": `https://dev-${apiHost}`,
				"test.localhost": `https://test-${apiHost}`
			}
		});

		const remoteServiceProxyMiddleware = createProxyMiddleware({
			target: "https://tstcdn1.zingworks.com",
			changeOrigin: true,
			router: {
				"dev.localhost": `https://tstcdn1.zingworks.com`,
				"test.localhost": `https://tstcdn1.zingworks.com`
			}
		});

		const httpOption = {
			cert: fs.readFileSync(
				path.join(__dirname, relativePath, "gateway", "localhost.crt")
			),
			key: fs.readFileSync(
				path.join(__dirname, relativePath, "gateway", "localhost.key")
			)
		};

		const server = https.createServer(httpOption, (request, response) => {
			const isMobile =
				new RegExp("Android|iPhone|Mobile\b").test(
					request.rawHeaders.join(",")
				) || request.url.split("mobile=")[1] === "true";
			response.setHeader("Cache-Control", "No-Cache");
			if (
				request.url === "/id" ||
				request.url.includes("/2/") ||
				request.url.startsWith("/user/")
			) {
				request.headers["Host"] = apiHost;
				// will remove this condition if custom domain added to all account
				if (!args.apiproxy) {
					request.headers["X-Forwarded-Host"] = request.headers.host;
				}
				return apiProxyMiddleware(request, response);
			} else if (
				(request.url.startsWith("/static/") &&
					remoteServices.includes(request.url.split("/")[2])) ||
				request.url.startsWith("/media/")
			) {
				request.headers["Host"] = apiHost;
				return remoteServiceProxyMiddleware(request, response);
			} else {
				// route static path
				const destinationHtmlPath = isMobile
					? "/pwa.index.html"
					: "/web.index.html";
				// You pass two more arguments for config and middleware
				return handler(request, response, {
					public: localBucket,
					rewrites: [
						{
							source: "/",
							destination: destinationHtmlPath
						},
						{ source: "/view*", destination: destinationHtmlPath },
						{
							source: "/portal*",
							destination: destinationHtmlPath
						},
						{
							source: "/appbuilder*",
							destination: destinationHtmlPath
						}
					]
				});
			}
		});

		server.listen(443);
		return server;
	} catch (err) {
    console.error("errr in local server", err)
		return false;
	}
};

export { startLocalServer };
