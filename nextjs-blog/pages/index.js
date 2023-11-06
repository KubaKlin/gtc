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
      <section className="baner">
        <div className="container">
          <div className="baner-content-wrapp">
            <h3>{t('baner.h3')}</h3>
            <h1>{t('baner.h1')}</h1>
            <p>{t('baner.p')}</p>
            <Link href="/about">About</Link>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
