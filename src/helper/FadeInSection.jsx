import React, { useRef, useState, useEffect } from "react";
import "../App.css";

const FadeInSection = (props) => {
  const [isVisible, setVisible] = useState(true);

  const domRef = useRef(null);

  useEffect(() => {
    const ref = domRef;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(ref.current);

    return () => observer.unobserve(ref.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};

export default FadeInSection;
