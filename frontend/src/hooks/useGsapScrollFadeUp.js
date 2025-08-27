import { useEffect } from "react";

export default function useGsapScrollFadeUp(ref, delay = 0.2) {
  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    let ctx;
  let ScrollTriggerRef;
    let mounted = true;
    (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);
      if (!mounted) return;
      gsap.registerPlugin(ScrollTrigger);
  ScrollTriggerRef = ScrollTrigger;
      ctx = gsap.context(() => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              toggleActions: "play none none none",
              once: true,
            },
          }
        );
      }, el);
    })();

    return () => {
      mounted = false;
      if (ctx) ctx.revert();
  
    } 
  }, [ref, delay]);
}
