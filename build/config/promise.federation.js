export const getRemoteWithDependencies = (packageJson, kind) => {
	let { dependsOn = [], name: parentName } = packageJson;

	return dependsOn.reduce((c, depPackage) => {
		let isObject = typeof depPackage === "object";
		let packageName = isObject
			? depPackage.moduleName || depPackage.name
			: depPackage;

		let remote = packageName.split("kf")[1] || packageName;

		c[packageName] = `promise new Promise((resolve, reject) => {
        let packageName = "${packageName}"
        let remote = "${remote}"
        let kind = "${kind}"
        let versionNumber = window.dependent_versionNumber[remote]
        let scriptId = remote+versionNumber
        const existingScript = document.getElementById(scriptId);

        function onScriptLoad(){
          console.log(packageName ,'downloaded ::','for parent',"${parentName}")
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

          let remoteUrl = window.publicPath+"static/"+remote+"/"+kind+"/"+versionNumber+"/external.js";

          const script = document.createElement("script");
          script.src = remoteUrl;
          script.type = "text/javascript";
          script.async = true;
          script.id = scriptId

          script.addEventListener('load', onScriptLoad);
          script.addEventListener('error', onScriptLoadError);
      
          document.head.appendChild(script);
        }
      })`;

		return c;
	}, {});
};
