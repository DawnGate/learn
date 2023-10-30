import React, { Suspense, useEffect, useState } from "react";

const App4Widget = React.lazy(() => import("app4/Widget"));

// loading component from remote
const loadComponent = (scope, module) => {
  return async () => {
    await __webpack_init_sharing__("default");
    const container = window[scope];
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
};

// dynamic script in header html
const urlCache = new Set();
const useDynamicScript = (url) => {
  const [ready, setReady] = useState(false);
  const [errorLoading, setErrorLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    if (urlCache.has(url)) {
      setReady(true);
      setErrorLoading(false);
      return;
    }

    setReady(false);
    setErrorLoading(false);

    const element = document.createElement("script");

    element.src = url;
    element.type = "text/javascript";
    element.async = true;

    element.onload = () => {
      urlCache.add(url);
      setReady(true);
    };

    element.onerror = () => {
      setReady(false);
      setErrorLoading(true);
    };

    document.head.appendChild(element);

    return () => {
      urlCache.delete(url);
      document.head.removeChild(element);
    };
  }, [url]);

  return {
    ready,
    errorLoading,
  };
};

// loading component
const componentCache = new Map();
export const useFederationComponent = (remoteUrl, scope, module) => {
  const key = `${remoteUrl}-${scope}-${module}`;

  const [Component, setComponent] = React.useState(null);

  const { ready, errorLoading } = useDynamicScript(remoteUrl);

  useEffect(() => {
    if (Component) setComponent(null);
  }, [key]);

  useEffect(() => {
    if (ready && !Component) {
      const Comp = React.lazy(loadComponent(scope, module));
      componentCache.set(key, Comp);
      setComponent(Comp);
    }
  }, [Component, ready, key]);

  return { errorLoading, Component };
};

const App = () => {
  const [{ module, scope, url }, setSystem] = useState({});

  const setApp2 = () => {
    setSystem({
      url: "http://localhost:3002/remoteEntry.js",
      scope: "app2",
      module: "./Widget",
    });
  };

  const setApp3 = () => {
    setSystem({
      url: "http://localhost:3003/remoteEntry.js",
      scope: "app3",
      module: "./Widget",
    });
  };

  const { Component: FederatedComponent, errorLoading } =
    useFederationComponent(url, scope, module);

  return (
    <div>
      <h1>App 1</h1>
      <p>The content of remote App</p>
      <div>
        <p>App4 widget</p>
        <Suspense fallback="Loading content">
          <App4Widget />
        </Suspense>
      </div>
      <button onClick={setApp2}>Loading App 2 Widget</button>
      <button onClick={setApp3}>Loading App 3 Widget</button>
      <div
        style={{
          marginTop: "2em",
        }}
      >
        <Suspense fallback="Loading system">
          {errorLoading
            ? `Error loading module "${module}"`
            : FederatedComponent && <FederatedComponent />}
        </Suspense>
      </div>
    </div>
  );
};

export default App;
