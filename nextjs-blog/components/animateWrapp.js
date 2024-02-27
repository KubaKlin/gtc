import { useRef } from "react";
import { useInView } from "framer-motion";

export function AnimateWrapp({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={isInView ? "animate-in animate-wait" : "animate-wait"}>
      {children}
    </section>
  );
}

export function AnimateWrappLater({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={isInView ? "animate-in later animate-wait" : "animate-wait"}>
      {children}
    </section>
  );
}
