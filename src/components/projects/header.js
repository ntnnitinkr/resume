import React, { useState, useEffect } from "react";
import "./header.css";
import { motion } from "framer-motion";
import data from "../../assets/data.json";

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

const ProjectList = (props) => {
  return (
    <>
      <motion.div className="section-body" variants={cardVariants}>
        <div className="image-container">
          <img className="image" src={props.item.imageurl}></img>
        </div>
        <div className="title">{props.item.name}</div>
        <div className="description">{props.item.description}</div>
        <a className="button" href={props.item.link} target="_blank">
          More Detail
        </a>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player
          src="https://assets4.lottiefiles.com/packages/lf20_5rewdnz2.json"
          background="transparent"
          speed="1"
          style={{ width: 300, height: 300 }}
          hover
        ></lottie-player>
      </motion.div>
    </>
  );
};

const SectionHeader = () => {
  return (
    <>
      <div id="projects" className="container-projects">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div className="section-title" variants={textVariants}>
            Projects
          </motion.div>
        </motion.div>

        <motion.div
          className="container-projects-body"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          {data.projects.map((item, i) => (
            <ProjectList item={item} key={i} />
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SectionHeader;
