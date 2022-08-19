import React, { useState, useEffect } from "react";
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
  const [state, setState] = useState({
    isOpen: false,
    height: "4.5rem",
  });

  const handleClick = function (event) {
    const jobDetailClass = event.target.closest(".body-job-detail");

    if (state.isOpen) {
      setState({ ...state, isOpen: false, height: "4.5rem" });
    } else {
      if (
        jobDetailClass === jobDetailClass.parentNode.childNodes[2] ||
        jobDetailClass === jobDetailClass.parentNode.childNodes[4]
      ) {
        if (window.innerWidth <= 768) {
          setState({ ...state, isOpen: true, height: "43rem" });
        } else {
          setState({ ...state, isOpen: true, height: "29rem" });
        }
      } else if (
        jobDetailClass === jobDetailClass.parentNode.childNodes[10]
      ) {
        if (window.innerWidth <= 768) {
          setState({ ...state, isOpen: true, height: "25rem" });
        } else {
          setState({ ...state, isOpen: true, height: "17rem" });
        }
      } else if (
        jobDetailClass === jobDetailClass.parentNode.childNodes[12] ||
        jobDetailClass === jobDetailClass.parentNode.childNodes[14]
      ) {
        if (window.innerWidth <= 768) {
          setState({ ...state, isOpen: true, height: "20rem" });
        } else {
          setState({ ...state, isOpen: true, height: "13rem" });
        }
      } else {
        if (window.innerWidth <= 768) {
          setState({ ...state, isOpen: true, height: "30rem" });
        } else {
          setState({ ...state, isOpen: true, height: "17rem" });
        }
      }
    }
  };

  useEffect(() => {
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
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 450 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ ease: "anticipate", delay: 0.2, duration: 0.7 }}
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
