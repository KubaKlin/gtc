import '../styles.scss';
import { Lato } from 'next/font/google'
import { useRef } from "react";
import { useInView } from "framer-motion";

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin']
})

export function AnimateWrapp({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={isInView ? "animate-in animate-wait" : "animate-wait"}>
      {children}
    </section>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        * {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
