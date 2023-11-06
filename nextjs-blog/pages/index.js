import { useEffect } from "react";
import PageHead from '../components/pagehead'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import '../i18n.js';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  useEffect(() => { import("bootstrap/dist/js/bootstrap"); }, []);

  return (
    <>
      <PageHead/>
      <NavBar/>
      <section>
        <h3>Documentation &rarr;</h3>
        <p>Find in-depth information about Next.js features and API.</p>
        <Link href="/about">About</Link>
      </section>
      <Footer/>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
