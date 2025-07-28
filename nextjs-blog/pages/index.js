import { useEffect } from "react";
import PageHead from '../components/pagehead'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import '../i18n.js';
import { useTranslation } from 'react-i18next';
import { AnimateWrapp, AnimateWrappLater } from "../components/animateWrapp";
import { staffMembers } from '../data/staffMembers';
import ContactFooter from "../components/contact_foot";
import StaffMember from "../components/staffMember";

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
              <h3>
                {t('baner.h3')}
              </h3>
              <h2>
                {t('baner.h1')}
              </h2>
              <p>
                {t('baner.p')}
              </p>
              <Link className="button" href="#about">
                {t('global.link2')}
              </Link>
              <Link className="button outline ms-5" href="#services">
                {t('global.link3')}
              </Link>
            </div>
          </AnimateWrapp>
        </div>
      </section>

      <section className="about" id="about">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="baner-content-wrapp">
            <AnimateWrapp>
              <h3>
                {t('baner2.h3')}
              </h3>
              <h2>
                {t('baner2.h1')}
              </h2>
              <p>
                {t('baner2.p')}
              </p>
              <Link className="button" href="#services">
                {t('baner2.button')}
              </Link>
            </AnimateWrapp>
          </div>
          <AnimateWrappLater>
            <div className="baner-content-wrapp-right ms-auto">
              <Image src="/about.png" width={696} height={538} alt="GTC logo"/>
            </div>
          </AnimateWrappLater>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <AnimateWrapp>
            <div className="row">
              <div className="stats-col col-6 col-lg-3">
                <Image
                  src="/icon/users.svg"
                  width={79} height={79}
                  alt="GTC stat ico"
                />
                <span>215</span>
                {t('stats.txt1')}
              </div>
              <div className="stats-col col-6 col-lg-3">
                <Image
                  src="/icon/delivery-time.svg"
                  width={79} height={79}
                  alt="GTC stat ico"
                />
                <span>335k</span>
                {t('stats.txt2')}
              </div>

              <div className="stats-col col-6 col-lg-3">
                <Image
                  src="/icon/shipping.svg"
                  width={79} height={79}
                  alt="GTC stat ico"
                />
                <span>363</span>
                {t('stats.txt3')}
              </div>
              <div className="stats-col col-6 col-lg-3">
                <Image
                  src="/icon/location.svg"
                  width={79} height={79}
                  alt="GTC stat ico"
                />
                <span>218</span>
                {t('stats.txt4')}
              </div>
            </div>
          </AnimateWrapp>
        </div>
      </section>

      <section className="services" id="services">
        <div className="container">
          <AnimateWrapp>
            <h4 className="big-head">
              {t('global.txt1')}
            </h4>
          </AnimateWrapp>
          <AnimateWrapp>
            <div className="row gap-lg-5 gap-2 mb-5">
              <div className="services-col col-10 col-lg">
                <h2>{t('service.txt1')}</h2>
                <Link className="button" href="/services/sea-containers">
                  {t('global.link6')}
                </Link>
              </div>
              <div className="services-col col-10 col-lg">
                <h2>{t('service.txt2')}</h2>
                <Link className="button" href="/services/ftl-transport">
                  {t('global.link6')}
                </Link>
              </div>
              <div className="services-col col-10 col-lg">
                <h2>{t('service.txt3')}</h2>
                <Link className="button" href="/services/recycling">
                  {t('global.link6')}
                </Link>
              </div>
              <div className="services-col col-10 col-lg">
                <h2>{t('service.txt4')}</h2>

                <Link className="button" href="/services/dump-trucks">
                  {t('global.link6')}
                </Link>
              </div>
            </div>
          </AnimateWrapp>
          <AnimateWrapp>
            <div className="row gap-lg-5 gap-2">
              <div className="services-col col-10 col-lg">
                <h2>{t('service.txt5')}</h2>
                <Link className="button" href="/services/expressltl">
                  {t('global.link6')}
                </Link>
              </div>
              <div className="services-col col-10 col-lg">
                <h2>{t('service.txt6')}</h2>
                <Link className="button" href="/services/crops">
                  {t('global.link6')}
                </Link>
              </div>
              <div className="services-col col-10 col-lg">
                <h2>{t('service.txt7')}</h2>
                <Link className="button" href="/services/storage">
                  {t('global.link6')}
                </Link>
              </div>
              <div className="services-col col-10 col-lg">
                <h2>{t('service.txt8')}</h2>

                <Link className="button" href="/services/for-carriers">
                  {t('global.link6')}
                </Link>
              </div>
            </div>
          </AnimateWrapp>
        </div>
      </section>

      <ContactFooter/>

      <section className="our-team" id="our-team">
        <div className="container">
          <AnimateWrapp>
            <h4 className="big-head">
              {t('global.txt2')}
            </h4>
          </AnimateWrapp>
          <AnimateWrapp>
            <div className="row mb-5">
              {staffMembers.slice(0, 8).map((item) => (
                <StaffMember
                  name={item.name}
                  desc={item.desc}
                  image={item.image}
                  //mail={item.mail}
                />
              ))}
            </div>
          </AnimateWrapp>
          <Link className="button main" href="/team">
            {t('global.link6')}
          </Link>
        </div>
      </section>

      <section className="gtc-brag-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <AnimateWrapp>
                <h4>GTC Poland</h4>
                <h3>
                  {t('baner3.txt1')}
                </h3>
              </AnimateWrapp>
            </div>
            <div className="col-12 col-lg-6 team-pic-wrapp">
              <AnimateWrappLater>
                <Image
                  src="/team/photo-1.png"
                  width={1198} height={1208}
                  alt="GTC service pic"
                  className="team-pic"
                />
              </AnimateWrappLater>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-map">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10228.910384002313!2d19.195441!3d50.138174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c10c28f80f2b%3A0x343f422aec4558b1!2sGTC%20POLAND%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1699443026042!5m2!1spl!2spl"
              width="100%" height="550" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 col-lg-6">
            <div className="baner-content-wrapp py-md-0 my-md-0 py-4 my-4">
              <AnimateWrapp>
                <h3>{t('global.link9')}</h3>
                <h4>
                  {t('baner.h1')}
                </h4>
                <p>
                  {t('baner.p')}
                </p>
                <Link className="button" href="/">
                  {t('global.link7')}
                </Link>
              </AnimateWrapp>
            </div>
          </div>
        </div>
      </section>

      <Footer/>
    </>
  );
}
