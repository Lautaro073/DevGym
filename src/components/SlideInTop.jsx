import React, { useRef, useState, useEffect } from "react";

function SlideInTop({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
      }
    );
    observer.observe(elementRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`slide-in-top ${isVisible ? "visible" : ""}`}
      ref={elementRef}
    >
      {children}
    </div>
  );
}

export default SlideInTop;

