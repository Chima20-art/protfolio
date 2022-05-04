import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "./scrollButton.module.css";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <KeyboardArrowUpIcon
      className={styles.KeyboardArrowUpIcon}
      onClick={scrollToTop}
      style={{ display: visible ? "inline" : "none" }}
    ></KeyboardArrowUpIcon>
  );
};

export default ScrollButton;
