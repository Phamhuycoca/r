import { useEffect, useState } from "react";

export const useHideOnScroll = () => {
  const [hidden, setHidden] = useState(false);
  let lastScrollY = 0;

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setHidden(true); // scroll down -> hide
          } else {
            setHidden(false); // scroll up -> show
          }
          lastScrollY = currentScrollY;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return hidden;
};
