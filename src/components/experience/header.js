import React, { useState, useEffect } from "react";
import "./header.css";
import Body from "./body";
import { motion } from "framer-motion";
import { Scrollbars } from "react-custom-scrollbars-2";
import SmoothScroll from "../smoothScroll/SmoothScroll";

const textVariants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "anticipate",
      duration: 1,
      delay: 0.5,
    },
  },
};

const gredientVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      ease: "anticipate",
      duration: 1,
      delay: 0.5,
    },
  },
};

const backgroundVariants = {
  start: {
    opacity: 0,
    scale: 0.8,
    y: 100,
    d: "M 27 139 L 407 139 C 407 139 434 139 434 112 L 434 27 C 434 27 434 0 461 0 L 1059 0 C 1059 0 1086 0 1086 27 L 1086 112 C 1086 112 1086 139 1113 139 L 1498 139 C 1498 139 1525 139 1525 139 L 1525 139 C 1525 139 1525 139 1498 139 L 27 139 C 0 139 0 139 0 139 L 0 139 C 0 139 0 139 27 139 Z",
  },
  end: {
    opacity: 1,
    scale: 1,
    y: 0,
    d: "M 27 139 L 407 139 C 407 139 434 139 434 112 L 434 27 C 434 27 434 0 461 0 L 1059 0 C 1059 0 1086 0 1086 27 L 1086 112 C 1086 112 1086 139 1113 139 L 1498 139 C 1498 139 1525 139 1525 166 L 1525 800 C 1525 800 1525 827 1498 827 L 27 827 C 27 827 0 827 0 800 L 0 166 C 0 166 0 139 27 139 Z",
  },
};

const SectionHeader = () => {
  return (
    <>
      <div className="container-experience">
        <motion.svg
          className="experience-background"
          initial="start"
          viewBox="0 0 1525 921"
          xmlns="http://www.w3.org/2000/svg"
          viewport={{ once: true, amount: 0.1 }}
          whileInView="end"
        >
          <motion.path
            variants={backgroundVariants}
            transition={{
              duration: 1,
            }}
            fill="#56f09f"
          />
        </motion.svg>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="gradient-hide-top"
            variants={gredientVariants}
          ></motion.div>
          <motion.div
            className="gradient-hide-bottom"
            variants={gredientVariants}
          ></motion.div>
          <motion.div class="section-title" variants={textVariants}>
            Experience
          </motion.div>

          <Scrollbars
            autoHeight
            autoHeightMin={680}
            autoHeightMax={680}
            renderTrackVertical={(props) => (
              <div {...props} className="track-vertical" />
            )}
          >
            <motion.div
              id="body-experience"
              className="body-experience"
              variants={textVariants}
            >
              <div className="empty-gap"></div>
              <Body />
              <div className="empty-gap"></div>
            </motion.div>
          </Scrollbars>
        </motion.div>
      </div>
    </>
  );
};

export default SectionHeader;
