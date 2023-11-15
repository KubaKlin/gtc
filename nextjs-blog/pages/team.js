import { useEffect } from "react";
import PageHead from '../components/pagehead'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
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
      <NavBar />

      <section className="sub-content-head baner">
        <div className="container">
          <AnimateWrapp>
            <div className="baner-content-wrapp px-3">
              <h5>{t('global.txt2')}</h5>
            </div>
          </AnimateWrapp>
        </div>
      </section>

      <section className="our-team">
        <div className="container">
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

      <Footer/>
    </>
  );
}
