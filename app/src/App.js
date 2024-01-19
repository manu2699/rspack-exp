import React from "react";

function Test() {
  return "hellp";
}

// remote modules can also be used with import() which lazy loads them as usual
const ComponentD = React.lazy(async () => await import("mfeCCC/Component2"));

function App() {
  console.log("test", Test);
  console.log("Lazy", ComponentD);
  return (
    <article>
      <React.Suspense fallback={<p>Lazy loading component...</p>}>
        <p>
          And this component is from this remote container too, but lazy loaded:
        </p>
        <ComponentD />
      </React.Suspense>
    </article>
  );
}
export default App;
