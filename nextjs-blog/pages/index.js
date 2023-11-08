import { useEffect } from "react";
import PageHead from '../components/pagehead'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.css';
import '../i18n.js';
import { useTranslation } from 'react-i18next';
import { AnimateWrapp, AnimateWrappLater } from "./_app";

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

      <section className="about" id="about">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="baner-content-wrapp">
            <AnimateWrapp>
              <h3>{t('baner.h3')}</h3>
              <h1>{t('baner.h1')}</h1>
              <p>{t('baner.p')}</p>
              <Link className="button" href="/about">Show services</Link>
            </AnimateWrapp>
          </div>
          <AnimateWrappLater>
            <div className="baner-content-wrapp-right ms-auto">
              <Image
                src="/about.png"
                width={696} height={538}
                alt="GTC logo"
              />
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
                <span>15</span>Clients
              </div>
              <div className="stats-col col-6 col-lg-3">
                <Image
                  src="/icon/delivery-time.svg"
                  width={79} height={79}
                  alt="GTC stat ico"
                />
                <span>15</span>
                Parcels
              </div>

              <div className="stats-col col-6 col-lg-3">
                <Image
                  src="/icon/shipping.svg"
                  width={79} height={79}
                  alt="GTC stat ico"
                />
                <span>15</span>
                Trucks
              </div>
              <div className="stats-col col-6 col-lg-3">
                <Image
                  src="/icon/location.svg"
                  width={79} height={79}
                  alt="GTC stat ico"
                />
                <span>15</span>
                Delivered
              </div>
            </div>
          </AnimateWrapp>
        </div>
      </section>

      <section className="services">
        <div className="container">
          <AnimateWrapp>
            <h4 className="big-head">Our Services</h4>
          </AnimateWrapp>
          <AnimateWrapp>
            <div className="row gap-lg-5 gap-2">
              <div className="services-col col-10 col-lg">
                <Image
                  src="/service1.png"
                  width={79} height={79}
                  alt="GTC service pic"
                />
                <h2>Transport  FTL i LTL</h2>
                <p>
                  Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować
                  terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.
                </p>
                <Link className="button" href="/about">See more</Link>
              </div>
              <div className="services-col col-10 col-lg">
                <Image
                  src="/service1.png"
                  width={79} height={79}
                  alt="GTC service pic"
                />

                <h2>Transport  FTL i LTL</h2>
                <p>
                  Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować
                  terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.
                </p>
                <Link className="button" href="/about">See more</Link>
              </div>
              <div className="services-col col-10 col-lg">
                <Image
                  src="/service1.png"
                  width={79} height={79}
                  alt="GTC service pic"
                />

                <h2>Transport  FTL i LTL</h2>
                <p>
                  Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować
                  terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.
                </p>
                <Link className="button" href="/about">See more</Link>
              </div>
              <div className="services-col col-10 col-lg">
                <Image
                  src="/service1.png"
                  width={79} height={79}
                  alt="GTC service pic"
                />

                <h2>Transport  FTL i LTL</h2>
                <p>
                  Posiadamy zaawansowane systemy zarządzania transportem, aby zagwarantować
                  terminowość oraz pełne bezpieczeństwo zleconych nam przesyłek.
                </p>
                <Link className="button" href="/about">See more</Link>
              </div>
            </div>
          </AnimateWrapp>
        </div>
      </section>

      <section className="gtc-brag">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5">
              <AnimateWrapp>
              <h4>GTC Poland</h4>
              <h3>The best people to take care of your cargo</h3>
              </AnimateWrapp>
            </div>
            <div className="col-12 col-lg d-flex">
              <Link className="button outline" href="/about">Contact us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="our-team">
        <div className="container">
          <AnimateWrapp>
            <h4 className="big-head">Our Team</h4>
          </AnimateWrapp>
          <AnimateWrapp>
            <div className="row gap-lg-5 gap-4">
              <div className="team-col col-5 col-lg">
                <Image
                  src="/team/team.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Transport  FTL i LTL</h2>
                <p>
                  Posiadamy zaawansowane
                </p>
              </div>
              <div className="team-col col-5 col-lg">
                <Image
                  src="/team/team1.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Transport  FTL i LTL</h2>
                <p>
                  Posiadamy zaawansowane
                </p>
              </div>
              <div className="team-col col-5 col-lg">
                <Image
                  src="/team/team2.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Transport  FTL i LTL</h2>
                <p>
                  Posiadamy zaawansowane
                </p>
              </div>
              <div className="team-col col-5 col-lg">
                <Image
                  src="/team/team3.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Transport  FTL i LTL</h2>
                <p>
                  Posiadamy zaawansowane
                </p>
              </div>
            </div>
          </AnimateWrapp>
        </div>
      </section>

      <section className="gtc-brag-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <AnimateWrapp>
                <h4>GTC Poland</h4>
                <h3>The best people to take care of your cargo</h3>
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

      <Footer/>
    </>
  );
}
