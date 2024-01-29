import path from "path";

import HtmlWebpackPlugin from "html-webpack-plugin";
import rspack from "@rspack/core";

import paths from "./paths.js";
import { getRemoteWithDependencies } from "./promise.federation.js";

const packageJson = paths.appPackageJson;
const publicPath = paths.servedPath;
const publicUrl = publicPath.slice(0, -1);
const assertPath = publicUrl.slice(1);
const kind = publicUrl.slice(1).split("/")[2];

console.info(" ((( Package Name ))) : ", packageJson.name, assertPath);

const alias = {
	[`@${packageJson.name}`]: paths.appSrc
};

export default {
	mode: "development",
	devtool: "eval-source-map",

	entry: {
		app: paths.appIndexJs
	},

	// context: __dirname,

	output: {
		path: paths.localBucketPath,
		filename: `${assertPath}/js/[name].js`,
		chunkFilename: `${assertPath}/js/[name].[fullhash:8].js`,
		publicPath: "/"
	},

	resolve: {
		// modules: ["node_modules", paths.appNodeModules].concat(
		// 	process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
		// ),
		extensions: [".web.js", ".js", ".json", ".web.jsx", ".jsx"],
		alias: {
			// Support React Native Web
			"react-native": "react-native-web",
			...alias
		},
		symlinks: true,
		fallback: {
			os: false,
			fs: false,
			module: false,
			path: false,
			events: false,
			assert: false,
			util: false
		}
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				// include: path.resolve(__dirname, "src"),
				exclude: (modulePath) => /node_modules/.test(modulePath),
				use: {
					loader: "builtin:swc-loader",
					options: {
						jsc: {
							parser: {
								syntax: "ecmascript",
								jsx: true
							},
							transform: {
								react: {
									runtime: "automatic",
									refresh: true
								}
							}
						}
					}
				}
			}
		]
	},
	plugins: [
		new rspack.container.ModuleFederationPlugin({
			name: packageJson.moduleName || packageJson.name,
			library: {
				type: "var",
				name: packageJson.moduleName || packageJson.name
			},
			filename: `${assertPath}/external.js`,
			exposes: packageJson.exports,
			remotes: getRemoteWithDependencies(packageJson, kind),
			shared: {
				react: {
					singleton: true // make sure only a single react module is used
				}
			}
		}),
		new HtmlWebpackPlugin({
			inject: true,
			scriptLoading: "blocking",
			filename: `${assertPath}/index.html`,
			template: paths.appHtml,
			chunks: ["app"]
		})
	]
};
