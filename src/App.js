import React, { useEffect, useState } from "react";
import Aboutme from "./components/aboutme";
import { Scrollbars } from "react-custom-scrollbars-2";

const debounce = function (fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
};

const App = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 0);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <>
      <Scrollbars
        autoHeight
        autoHeightMin={dimensions.height}
        autoHeightMax={dimensions.height}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <Aboutme />
      </Scrollbars>
    </>
  );
};

export default App;
