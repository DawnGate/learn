import React, { useEffect, useState } from "react";

const useDocumentTitle = (title) => {
  useEffect(() => {
    document.title = "This is new title: " + title;
  });
};

const useWindowHeight = () => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResizeWindow = () => {
      setWindowHeight(window.innerHeight);
    };
    handleResizeWindow();

    window.addEventListener("resize", handleResizeWindow);

    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return windowHeight;
};

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("idle");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setStatus("loading");
    setIsError(false);
    const timeOut = setTimeout(() => {
      fetch("https://pokeapi.co/api/v2/pokemon/ditto").then((res) => {
        if (res) {
          res
            .json()
            .then((resData) => {
              setData(resData);
            })
            .catch((err) => {
              setIsError(true);
            })
            .finally(() => {
              setStatus("idle");
            });
        } else {
          setStatus("idle");
          setIsError(true);
        }
      });
    }, 2000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return { data, status, isError };
};

const EffectHook = () => {
  useDocumentTitle("Updated!");
  const windowHeight = useWindowHeight();
  const { data, status, isError } = useFetchData();

  return (
    <div>
      <h1>Hook Effect</h1>
      <div>
        <p>Window Height: {windowHeight}</p>
      </div>
      <div>
        {status === "loading" ? (
          <p>Is Loading Data</p>
        ) : (
          <div>{JSON.stringify(data)}</div>
        )}
        {isError && <p style={{ color: "red" }}>Some thing error</p>}
      </div>
    </div>
  );
};

export default EffectHook;
