import React, { Suspense, useEffect, useRef, useState } from "react";
import useReactWrapper from "./wrapper/useReactWrapper";
import loadApp6Widget from "app6/loadWidget";
// direct load component
const App4Widget = React.lazy(() => import("app4/Widget"));

// loading component from remote

const App = () => {
  const [loadableReact, setLoadableReact] = useState({});

  const app6Ref = useRef();

  const setApp2 = () => {
    setLoadableReact({
      remoteUrl: "http://localhost:3002/remoteEntry.js",
      scope: "app2",
      module: "./Widget",
    });
  };

  const setApp3 = () => {
    setLoadableReact({
      remoteUrl: "http://localhost:3003/remoteEntry.js",
      scope: "app3",
      module: "./Widget",
    });
  };

  const setApp2Button = () => {
    setLoadableReact({
      remoteUrl: "http://localhost:3002/remoteEntry.js",
      scope: "app2",
      module: "./Button",
    });
  };

  const setApp6Widget = () => {
    loadApp6Widget(app6Ref.current);
  };

  const { errorLoading, renderModule } = useReactWrapper(loadableReact);

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
      <button data-e2e="Load-app2" onClick={setApp2}>
        Loading App 2 Widget
      </button>
      <button data-e2e="Load-app3" onClick={setApp3}>
        Loading App 3 Widget
      </button>
      <button onClick={setApp2Button}>Loading App 2 Button</button>
      <button onClick={setApp6Widget}>Loading App 6 Widget</button>
      <div
        style={{
          marginTop: "2em",
        }}
      >
        {!errorLoading && renderModule}
        <div ref={app6Ref} />
      </div>
    </div>
  );
};

export default App;
