import React from "react";

import Component1 from "lib1/Component";
import { Component as Component2 } from "lib2/Component";

// remote modules can also be used with import() which lazy loads them as usual
const ComponentD = React.lazy(async () => await import("lib2/Component2"));
// const Component1 = React.lazy(async () => await import("lib1/Component"));

function App() {
	return (
		<article>
			<Component1 />
			<Component2 />
			<React.Suspense fallback={<p>Lazy loading component...</p>}>
				<p>
					And this component is from this remote container too, but
					lazy loaded:
				</p>
				<ComponentD />
			</React.Suspense>
		</article>
	);
}
export default App;
