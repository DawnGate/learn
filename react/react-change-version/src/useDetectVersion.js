import React, { useEffect, useState } from "react";

import { APP_VERSION } from "./config";

const useDetectVersion = () => {
  // this check the version after 60s, but make sure that version.json setting no-cache,( no-store, must-revalidate)
  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    console.log("call detect");
    const getVersion = () => {
      console.log("call get version");
      fetch("/version.json").then((res) => {
        res.json().then((data) => {
          if (data.currentVersion !== APP_VERSION) {
            setShouldUpdate(true);
          }
        });
      });
    };
    const checkInterval = setInterval(() => {
      getVersion();
    }, 60 * 1000);

    getVersion();
    return () => {
      clearInterval(checkInterval);
    };
  }, []);

  return (
    <div>
      {shouldUpdate && (
        <div>
          <p>You should update the latest version</p>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Reload
          </button>
        </div>
      )}
    </div>
  );
};

export default useDetectVersion;
