import React, { useLayoutEffect, useState, useEffect } from "react";
import "./header.css";
import { motion } from "framer-motion";

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

const HeaderFrame = ({ width, height }) => {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1.1 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ ease: "anticipate", duration: 2 }}
    >
      <svg
        id="header-frame"
        class="header-frame"
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="20"
          y="20"
          width={width - 40}
          height={height - 40}
          fill="#004737"
          rx="20"
        />
      </svg>
    </motion.div>
  );
};

const Header = () => {
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
    <div
      class="container-aboutme"
      width={dimensions.width}
      height={dimensions.height}
    >
      <HeaderFrame width={dimensions.width} height={dimensions.height} />
    </div>
  );
};

export default Header;
