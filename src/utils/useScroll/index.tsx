import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollPosition, setScrollPosition] = useState({
    scrollX: 0,
    scrollY: 0,
  });

  const handleScroll = () => {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    setScrollPosition({ scrollX, scrollY });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scrollPosition };
};
