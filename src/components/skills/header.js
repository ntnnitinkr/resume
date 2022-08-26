import React, { useState, useEffect } from "react";
import "./header.css";
import { motion } from "framer-motion";
import data from "../../assets/data.json";
import Scene from "./Scene";

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

const SkillsList = (props) => {
  return (
    <>
      <motion.div className="section-body" variants={cardVariants}>
        <span className="container-skill-logo-bg"></span>
        <img
          className="logo"
          src={require(`../../assets/${props.item.logo}`)}
        ></img>
        <span className="text">{props.item.text}</span>
      </motion.div>
    </>
  );
};

const SectionHeader = () => {
  return (
    <>
      <div id="skills" className="container-skills">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="section-title" variants={textVariants}>
            Skills
          </motion.div>
        </motion.div>

        <motion.div
          className="container-skills-body"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          {data.skills.map((item, i) => (
            <SkillsList item={item} key={i} />
          ))}
        </motion.div>
        <div className="separator"></div>
        <Scene />
      </div>
    </>
  );
};

export default SectionHeader;
