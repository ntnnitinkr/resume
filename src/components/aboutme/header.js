import React, { useState, useEffect } from "react";
import "./header.css";
import { motion } from "framer-motion";
import data from "../../assets/data.json";
import expLogo from "../../assets/experience.png";
import proLogo from "../../assets/projects.png";

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
    },
  },
};

const cardVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.8,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: "anticipate",
      duration: 1,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const SectionHeader = () => {
  return (
    <>
      <div id="aboutme" className="container-aboutme">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="section-title" variants={textVariants}>
            About Me
          </motion.div>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div className="section-subtitle" variants={textVariants}>
            <div className="section-subtitle-quote">
              <span>Failure Is The Power That Gives </span>
              <span className="light-green-text">Success</span>
            </div>
            <div className="section-subtitle-description">
              <span className="verticle-line"></span>
              <span className="text">{data.aboutMe.description}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="container-aboutme">
        <div className="section-experience">
          <motion.div
            className="section-experience-box-left"
            variants={cardVariants}
            whileHover="hover"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <img className="section-experience-logo" width="60px" src={expLogo} />
            <span className="section-experience-title">
              {data.aboutMe.yearOfExperience}
            </span>
            <span className="section-experience-subtitle">Years of Experience</span>
          </motion.div>
          <motion.div
            className="section-experience-box-right"
            variants={cardVariants}
            whileHover="hover"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <img className="section-experience-logo" width="90px" src={proLogo} />
            <span className="section-experience-title">
              {data.aboutMe.projectsCompleted}
            </span>
            <span className="section-experience-subtitle">Projects Completed</span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
