import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [scrollPercent, setScrollPercent] = useState(0);

  function handleScrollPercent() {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrollPercent = (totalScroll / windowHeight) * 100;
    // setScrollPercent(scrollPercent + 5);
    if (totalScroll > 0) {
      setScrollPercent(scrollPercent+5);
    } else {
      setScrollPercent(0);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercent);
    return () => {
      window.removeEventListener("scroll", handleScrollPercent);
    };
  }, []);

  return (
    <div className="scroll-indicator">
      <div className="top-container">
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar bg-white h-2 fixed z-50"
            style={{ width: `${scrollPercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
