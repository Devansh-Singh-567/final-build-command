import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = ref.current;
    if (el) {
      const targets = el.querySelectorAll(".fade-in-section, .slide-in-left, .slide-in-right");
      targets.forEach((t) => observer.observe(t));
      return () => targets.forEach((t) => observer.unobserve(t));
    }
  }, []);

  return ref;
}
