import React, { useState, useEffect } from "react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="myBtn"
      onClick={handleClick}
      style={{ display: showButton ? "block" : "none" }}
    >
        <img src="up.png" alt="" className="fix" />
      
    </button>
  );
}
