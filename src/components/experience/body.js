import React, { useState, useEffect, useRef } from "react";
import "./body.css";
import data from "../../assets/data.json";
import { motion } from "framer-motion";

const DetailPoints = (props) => {
  return (
    <>
      <div className="job-point">{props.item}</div>
    </>
  );
};

const ContentList = (props) => {
  const jobDescClass = useRef(null);

  const [state, setState] = useState({
    isOpen: false,
    height: "4.5rem",
  });

  const handleClick = function (event) {
    if (state.isOpen) {
      setState({ ...state, isOpen: false });
    } else {
      setState({ ...state, isOpen: true });
    }
  };

  useEffect(() => {
    if (jobDescClass.current) {
      if (document.getElementById("body-experience").style.width !== "90%") {
        setTimeout(() => {
          setState({ ...state, height: jobDescClass.current.clientHeight });
        }, 500);
      } else {
        setState({ ...state, height: jobDescClass.current.clientHeight });
      }
    } else {
      if (window.innerWidth > 768) {
        setState({ ...state, height: "4.5rem" });
      } else {
        setState({ ...state, height: "3rem" });
      }
    }

    const jobDetails = document.getElementsByClassName("job-description");
    let isDetailOpen = false;
    for (const jobDetail of jobDetails) {
      isDetailOpen = true;
    }
    if (isDetailOpen) {
      document.getElementById("body-experience").style.width = "90%";
    } else {
      document.getElementById("body-experience").style.width = "40%";
    }
  }, [state.isOpen]);

  return (
    <>
      <div className="horizontal-line"></div>
      <div
        className="body-job-detail"
        style={{ height: state.height }}
        onClick={(event) => {
          handleClick(event);
        }}
      >
        <div className="year-range">{props.item.yearRange}</div>
        <div className="job-title">{props.item.title}</div>
        <div className="company-name">{props.item.company}</div>
        {state.isOpen ? (
          <motion.div
            className="job-description"
            ref={jobDescClass}
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 450 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ ease: "anticipate", delay: 0.6, duration: 0.7 }}
          >
            {props.item.detail.map((point, i) => (
              <DetailPoints item={point} key={i} />
            ))}
          </motion.div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default function ExperienceContent() {
  return data.experience.map((item, i) => <ContentList item={item} key={i} />);
}
