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
      <div className="container-aboutme">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div class="section-title" variants={textVariants}>
            About Me
          </motion.div>
        </motion.div>

        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div class="section-subtitle" variants={textVariants}>
            <div class="section-subtitle-quote">
              <span>Failure Is The Power That Gives </span>
              <span class="light-green-text">Success</span>
            </div>
            <div class="section-subtitle-description">
              <span class="verticle-line"></span>
              <span class="text">{data.aboutMe.description}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="container-aboutme">
        <div class="section-experience">
          <motion.div
            class="section-experience-box-left"
            variants={cardVariants}
            whileHover="hover"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <img class="section-experience-logo" width="60px" src={expLogo} />
            <span class="section-experience-title">
              {data.aboutMe.yearOfExperience}
            </span>
            <span class="section-experience-subtitle">Years of Experience</span>
          </motion.div>
          <motion.div
            class="section-experience-box-right"
            variants={cardVariants}
            whileHover="hover"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <img class="section-experience-logo" width="90px" src={proLogo} />
            <span class="section-experience-title">
              {data.aboutMe.projectsCompleted}
            </span>
            <span class="section-experience-subtitle">Projects Completed</span>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
