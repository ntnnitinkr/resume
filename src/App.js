import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Header from "./components/header";
import AboutMe from "./components/aboutme";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";

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
        style={{ scrollBehavior: "smooth" }}
        renderTrackVertical={({ style, ...props }) => (
          <div
            {...props}
            style={{
              ...style,
              right: 2,
              bottom: 2,
              top: 2,
              borderRadius: 3,
              zIndex: 100,
            }}
          />
        )}
        autoHeight
        autoHeightMin={dimensions.height}
        autoHeightMax={dimensions.height}
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
      >
        <Header />
        <AboutMe />
        <Experience />
        <Skills />
        <Projects />
        <Footer />
      </Scrollbars>
    </>
  );
};

export default App;
