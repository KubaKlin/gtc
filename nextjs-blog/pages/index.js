import { useEffect } from "react";
import PageHead from '../components/pagehead'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import '../i18n.js';
import { useTranslation } from 'react-i18next';
import { AnimateWrapp } from "./_app";

export default function Home() {
  const { t } = useTranslation();
  useEffect(() => { import("bootstrap/dist/js/bootstrap"); }, []);

  return (
    <>
      <PageHead/>
      <NavBar/>
      <section className="baner">
        <div className="container">
          <AnimateWrapp>
            <div className="baner-content-wrapp">
              <h3>{t('baner.h3')}</h3>
              <h1>{t('baner.h1')}</h1>
              <p>{t('baner.p')}</p>
              <Link className="button" href="/about">About</Link>
              <Link className="button outline ms-5" href="/about">Services</Link>
            </div>
          </AnimateWrapp>
        </div>
      </section>

      <section className="about">
        <div className="container d-flex justify-content-between align-items-center">
          <AnimateWrapp>
            <div className="baner-content-wrapp">
              <h3>{t('baner.h3')}</h3>
              <h1>{t('baner.h1')}</h1>
              <p>{t('baner.p')}</p>
              <Link className="button" href="/about">Show services</Link>
            </div>
          </AnimateWrapp>
          <AnimateWrapp>
            <div className="baner-content-wrapp-right ms-auto">
              <Image
                src="/about.png"
                width={696} height={538}
                alt="GTC logo"
              />
            </div>
          </AnimateWrapp>
        </div>
      </section>
      <Footer/>
    </>
  );
}
