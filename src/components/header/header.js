import React, { useState, useEffect } from "react";
import "./header.css";
import data from "../../assets/data.json";
import hero from "../../assets/selfie.png";
import resume from "../../assets/Resume_NitinKumar_IBM.pdf";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

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
        className="header-frame"
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

const HeaderCircle = ({ width, height }) => {
  return (
    <>
      <motion.div
        className="header-circle-motion"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "anticipate", delay: 1.2, duration: 1 }}
      >
        <svg
          className="header-circle"
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          {window.innerWidth > 768 ? (
            <circle cx="75%" cy="60%" r={height / 3} fill="#56F09F" />
          ) : (
            <circle cx="50%" cy="78%" r={height / 6} fill="#56F09F" />
          )}
        </svg>
        <img
          className="header-hero-image"
          height={height - 80}
          src={hero}
          alt=""
        />
      </motion.div>
    </>
  );
};

const PageHeader = () => {
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
    <div id="home" className="container-header">
      <HeaderFrame width={dimensions.width} height={dimensions.height} />
      <div className="heading">
        <motion.div
          className="header-text-motion"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "anticipate", delay: 1.6, duration: 1 }}
        >
          <div className="heading-title">{data.title}</div>
          <div className="heading-subtitle">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(2000)
                  .changeDelay(50)
                  .typeString(`< ${data.jobTitle} />`)
                  .start();
              }}
            />
          </div>
        </motion.div>
      </div>
      <HeaderCircle width={dimensions.width} height={dimensions.height} />
      <motion.div
        className="header-button-motion"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: "anticipate", delay: 3, duration: 1 }}
      >
        <a className="button" href={resume} target="_blank" rel="noreferrer">
          Download CV
        </a>
      </motion.div>
    </div>
  );
};

export default PageHeader;
