import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

export default function useHashScroll(offset = 100) {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash) {
      const target = document.getElementById(hash);
      if (target) {
        setTimeout(() => {
          gsap.to(window, {
            scrollTo: { y: target, offsetY: offset },
            duration: 0.6,
            ease: "power2.out",
          });
        }, 100); 
      }
    }
  }, [location, offset]);
}
