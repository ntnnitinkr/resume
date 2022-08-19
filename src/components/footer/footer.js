import React, { useState, useEffect } from "react";
import "./footer.css";
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
      <div className="container-footer">
        <div className="left-section">
          <div className="heading-contact">Contact Me</div>
          <ul className="social-list">
            <li className="item">
              <a href="#" target="_blank" rel="external nofollow noopener">
                <span className="bg"></span>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 15 14"
                  className="icon"
                >
                  <path
                    d="M3.69889 2.22305C3.69889 3.00868 3.05293 3.6463 2.25566 3.6463C1.45838 3.6463 0.81242 3.00868 0.81242 2.22305C0.81242 1.43742 1.45838 0.799805 2.25566 0.799805C3.05293 0.799805 3.69889 1.43742 3.69889 2.22305ZM3.71053 4.78489H0.800781V13.8937H3.71053V4.78489ZM8.35449 4.78489H5.4622V13.8937H8.35449V9.11156C8.35449 6.45294 11.8636 6.23661 11.8636 9.11156V13.8937H14.7676V8.12668C14.7676 3.6406 9.57658 3.8057 8.35449 6.00889V4.78489Z"
                    fill="#004737"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="item">
              <a
                href="mailto:ntn.nitinkr@gmail.com"
                rel="external nofollow noopener"
              >
                <span className="bg"></span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="icon"
                >
                  <path
                    d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                    fill="#004737"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="item">
              <a href="#" target="_blank" rel="external nofollow noopener">
                <span className="bg"></span>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 15 14"
                  className="icon"
                >
                  <path
                    d="M12.8857 0.799805H2.68304C1.64334 0.799805 0.800781 1.64234 0.800781 2.68168V12.8844C0.800781 13.9237 1.64334 14.7663 2.6827 14.7663H7.71448L7.72302 9.77526H6.42638C6.25794 9.77526 6.12127 9.63894 6.12059 9.4705L6.11444 7.86161C6.11375 7.69215 6.2511 7.55446 6.42057 7.55446H7.71482V5.9999C7.71482 4.19592 8.8167 3.21365 10.426 3.21365H11.7465C11.9157 3.21365 12.0523 3.35065 12.0523 3.51977V4.87617C12.0523 5.04495 11.9153 5.18196 11.7465 5.1823L10.9361 5.18264C10.0611 5.18264 9.89126 5.59844 9.89126 6.20899V7.5548H11.8145C11.9977 7.5548 12.1398 7.7147 12.1183 7.8968L11.9276 9.50569C11.9095 9.65978 11.7786 9.7756 11.6239 9.7756H9.90014L9.8916 14.7666H12.8857C13.925 14.7666 14.7676 13.9241 14.7676 12.8847V2.68168C14.7676 1.64234 13.925 0.799805 12.8857 0.799805Z"
                    fill="#004737"
                  ></path>
                </svg>
              </a>
            </li>
            <li className="item">
              <a href="#" target="_blank" rel="external nofollow noopener">
                <span className="bg"></span>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 15 14"
                  className="icon"
                >
                  <path
                    d="M7.78418 2.05682C9.64642 2.05682 9.86756 2.06264 10.6066 2.09755C12.498 2.18484 13.3825 3.08105 13.4698 4.96074C13.5047 5.694 13.5106 5.91514 13.5106 7.7832C13.5106 9.65126 13.5047 9.86658 13.4698 10.6057C13.3825 12.4854 12.5038 13.3816 10.6066 13.4688C9.86756 13.5038 9.65224 13.5096 7.78418 13.5096C5.92194 13.5096 5.7008 13.5038 4.96172 13.4688C3.06457 13.3816 2.18582 12.4795 2.09853 10.6057C2.06361 9.86658 2.05779 9.64544 2.05779 7.7832C2.05779 5.92096 2.06361 5.69982 2.09853 4.96074C2.18582 3.08105 3.06457 2.18484 4.96172 2.09755C5.7008 2.06264 5.92194 2.05682 7.78418 2.05682ZM7.78418 0.799805C5.88702 0.799805 5.64842 0.805624 4.90353 0.840541C2.36623 0.956931 0.957908 2.36525 0.841518 4.90255C0.806601 5.64745 0.800781 5.88604 0.800781 7.7832C0.800781 9.68036 0.81242 9.91896 0.841518 10.6639C0.957908 13.2012 2.36623 14.6095 4.90353 14.7259C5.64842 14.7608 5.88702 14.7666 7.78418 14.7666C9.68133 14.7666 9.91993 14.7608 10.6648 14.7259C13.1963 14.6095 14.6104 13.2012 14.7268 10.6639C14.7559 9.91896 14.7676 9.68036 14.7676 7.7832C14.7676 5.88604 14.7618 5.64745 14.7268 4.90255C14.6163 2.37107 13.2021 0.956931 10.6648 0.840541C9.91993 0.805624 9.68133 0.799805 7.78418 0.799805ZM7.78418 4.19839C5.80555 4.19839 4.19937 5.80457 4.19937 7.7832C4.19937 9.76183 5.80555 11.368 7.78418 11.368C9.76281 11.368 11.369 9.76183 11.369 7.7832C11.369 5.80457 9.76281 4.19839 7.78418 4.19839ZM7.78418 10.111C6.49807 10.111 5.45638 9.06931 5.45638 7.7832C5.45638 6.49709 6.49807 5.4554 7.78418 5.4554C9.07029 5.4554 10.112 6.49709 10.112 7.7832C10.112 9.06931 9.07029 10.111 7.78418 10.111ZM11.5145 3.2149C11.0489 3.2149 10.6765 3.58734 10.6765 4.0529C10.6765 4.51846 11.0547 4.89091 11.5145 4.89091C11.98 4.89091 12.3525 4.51846 12.3525 4.0529C12.3525 3.59316 11.9742 3.2149 11.5145 3.2149Z"
                    fill="#004737"
                  ></path>
                </svg>
              </a>
            </li>
          </ul>
          <div className="made-by-text">Made by me, using</div>
          <div className="react-text">React</div>
          <div className="copyright-text">
            Copyright © 2022. All rights reserved.
          </div>
        </div>
        <div className="right-section">
          <ul className="list">
            <li className="item">
              <a className="menu-link" href="#home">
                Home
              </a>
            </li>
            <li className="item">
              <a className="menu-link" href="#aboutme">
                About Me
              </a>
            </li>
            <li className="item">
              <a className="menu-link" href="#experience">
                Experience
              </a>
            </li>
            <li className="item">
              <a className="menu-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="item">
              <a className="menu-link" href="#projects">
                Projects
              </a>
            </li>
            <li className="item">
              <a
                className="menu-link"
                target="_blank"
                href="https://github.com/ntnnitinkr"
              >
                GitHub
              </a>
            </li>
            <li className="item">
              <a
                className="menu-link"
                target="_blank"
                href="https://github.com/ntnnitinkr/courses-certifications"
              >
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionHeader;
