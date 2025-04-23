// src/animation/useGlobalScroll.js
import { useEffect } from "react";

const useGlobalScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-animate]");
      elements.forEach((element) => {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        const delay = element.dataset.delay || "0s";

        if (top < windowHeight - 0) {
          element.style.transitionDelay = delay;
          element.classList.add("animate");
        } else {
          element.classList.remove("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

export default useGlobalScroll;
