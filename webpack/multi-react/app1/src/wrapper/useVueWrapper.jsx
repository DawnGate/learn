import React, { useRef, useEffect, useState } from "react";

// old way to dynamic load data in react
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
export const useVueWrapper = ({ remoteUrl, scope, module, isModule }) => {
  const key = `${remoteUrl}-${scope}-${module}`;

  const vueRef = useRef();

  const { ready, errorLoading } = useDynamicScript(remoteUrl);

  useEffect(() => {
    if (ready) {
      loadComponent(scope, module)().then((res) => {
        res.default(vueRef.current);
      });
    }
  }, [ready, key]);

  const renderModule = <div ref={vueRef} />;

  return { errorLoading, renderModule };
};

export default useVueWrapper;
