import '../styles.scss';
import { Lato } from 'next/font/google'

const lato = Lato({
  weight: ['300', '400', '700', '900'],
  subsets: ['latin']
})

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <style>{`
        * {
          font-family: ${lato.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
