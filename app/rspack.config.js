const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ReactRefreshPlugin = require("@rspack/plugin-react-refresh")
const rspack = require("@rspack/core")

const isProduction = process.env.NODE_ENV === "production"

/** @type {import('@rspack/core').Configuration} */
module.exports = {
  mode: isProduction ? "production" : "development",
  entry: "./src/index.js",
  context: __dirname,
  output: {
    // set uniqueName explicitly to make react-refresh works
    uniqueName: "app"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"),
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
                  refresh: !isProduction,
								}
							}
						}
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new rspack.container.ModuleFederationPlugin({
      // List of remotes with URLs
      remotes: {
        "mfeBBB" : `promise new Promise((resolve, reject) => {
     
          let packageName = "mfeBBB"
          let scriptId = "lib1"
          const existingScript = document.getElementById(scriptId);
  
          function onScriptLoad(){
            resolve(window[packageName])
          }
          function onScriptLoadError(){
            document.head.removeChild(existingScript);
            reject();
          }
  
          if(window[packageName]){
            
            resolve(window[packageName]);
            
          } else if (existingScript) {
  
            existingScript.addEventListener('load', onScriptLoad);
            existingScript.addEventListener('error', onScriptLoadError);
  
          } else {
  
            const script = document.createElement("script");
            script.src = "http://localhost:8081/mfeBBB.js";
            script.type = "text/javascript";
            script.async = true;
            script.id = scriptId
  
            script.addEventListener('load', onScriptLoad);
            script.addEventListener('error', onScriptLoadError);
        
            document.head.appendChild(script);
          }
        })`,
        "mfeCCC" : `promise new Promise((resolve, reject) => {
     
          let packageName = "mfeCCC"
          let scriptId = "lib2"
          const existingScript = document.getElementById(scriptId);
  
          function onScriptLoad(){
            console.log("on done","package loaded")
            resolve(window[packageName])
          }
          function onScriptLoadError(){
            // document.head.removeChild(existingScript);
            // reject();
          }
  
          if(window[packageName]){
            
            resolve(window[packageName]);
            
          } else if (existingScript) {
  
            existingScript.addEventListener('load', onScriptLoad);
            existingScript.addEventListener('error', onScriptLoadError);
  
          } else {
  
            const script = document.createElement("script");
            script.src = "http://localhost:8082/mfeCCC.js";
            script.type = "text/javascript";
            script.async = true;
            script.id = scriptId
  
            script.addEventListener('load', onScriptLoad);
            script.addEventListener('error', onScriptLoadError);
        
            document.head.appendChild(script);
          }
        })`
        // "mfe-b": "mfeBBB@http://localhost:8081/mfeBBB.js",
        // "mfe-c": "mfeCCC@http://localhost:8082/mfeCCC.js"
      },

      // list of shared modules with optional options
      shared: {
        // specifying a module request as shared module
        // will provide all used modules matching this name (version from package.json)
        // and consume shared modules in the version specified in dependencies from package.json
        // (or in dev/peer/optionalDependencies)
        // So it use the highest available version of this package matching the version requirement
        // from package.json, while providing it's own version to others.
        react: {
          singleton: true, // make sure only a single react module is used
        }
      },
    }),
    !isProduction && new ReactRefreshPlugin(),
  ],
  devServer: {
    port: 8080,
  }
}