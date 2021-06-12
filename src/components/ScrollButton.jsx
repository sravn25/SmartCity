import React, { useState } from "react";
import "./ScrollButtonStyles.css";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const scrollingPoint = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) setVisible(true);
    else if (scrolled <= 300) setVisible(false);
  };

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behaviour: "auto",
    });
  };

  window.addEventListener("scroll", scrollingPoint);

  const buttonText = visible ? "inline" : "none";

  return (
    <div>
      <button
        className="scrollButton"
        onClick={scrollUp}
        style={{ display: buttonText }}
      >
        &uarr;
      </button>
    </div>
  );
};

export default ScrollButton;
