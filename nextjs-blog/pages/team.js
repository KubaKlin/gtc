import { useEffect } from "react";
import PageHead from '../components/pagehead'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import '../i18n.js';
import { useTranslation } from 'react-i18next';
import { AnimateWrapp } from "./_app";
import ContactFooter from "../components/contact_foot";


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
            <div className="row mb-5">
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/3.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Kamil Rebizant</h2>
                <p>{t('team.oc3')}</p>
                <p>kamil.rebizant@gtcpoland.com </p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/21.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Patryk Pietrzak</h2>
                <p>{t('team.oc21')}</p>
                <p>patryk.pietrzak@gtcpoland.com</p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/6.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Rafał Kolarczyk</h2>
                <p>{t('team.oc6')}</p>
                <p>rafal.kolarczyk@gtcpoland.com </p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/11.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Agnieszka Bajer</h2>
                <p>{t('team.oc11')}</p>
                <p>agnieszka.bajer@gtcpoland.com </p>
              </div>
            </div>
          </AnimateWrapp>
          <AnimateWrapp>
            <div className="row mb-5">
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/12.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Alona Dibrova Wanot</h2>
                <p>{t('team.oc12')}</p>
                <p>alona.wanot@gtcpoland.com </p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/4.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Łucja Ząbek</h2>
                <p>{t('team.oc4')}</p>
                <p>lucja.zabek@gtcpoland.com</p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/24.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Wiktoria Jochemczyk</h2>
                <p>{t('team.oc24')}</p>
                <p>wiktoria.jochemczyk@gtcpoland.com </p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/25.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Dominik Wieczorek</h2>
                <p>{t('team.oc25')}</p>
                <p>dominik.wieczorek@gtcpoland.com</p>
              </div>
            </div>
          </AnimateWrapp>
          <AnimateWrapp>
            <div className="row mb-5">
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/1.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Michał Żółw</h2>
                <p>{t('team.oc1')}</p>
                <p></p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/19.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Krzysztof Woźniak</h2>
                <p>{t('team.oc19')}</p>
                <p></p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/10.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Adrian Plesiak</h2>
                <p>{t('team.oc10')}</p>
                <p>adrian.plesiak@gtcpoland.com</p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/13.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Daniel Morzywołek</h2>
                <p>{t('team.oc13')}</p>
                <p>daniel.morzywolek@gtcpoland.com</p>
              </div>
            </div>
          </AnimateWrapp>
          <AnimateWrapp>
            <div className="row mb-5">
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/18.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Klaudia Ebert </h2>
                <p>{t('team.oc18')}</p>
                <p>klaudia.ebert@gtcpoland.com</p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/5.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Karolina Pońc</h2>
                <p>{t('team.oc5')}</p>
                <p>karolina.ponc@gtcpoland.com</p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/20.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Marta Staszczyk</h2>
                <p>{t('team.oc20')}</p>
                <p>marta.staszczyk@gtcpoland.com</p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/22.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Paulina Jarosz</h2>
                <p>{t('team.oc22')}</p>
                <p>paulina.jarosz@gtcpoland.com</p>
              </div>
            </div>
          </AnimateWrapp>
          <AnimateWrapp>
            <div className="row mb-5">
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/23.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Piotr Wagstyl</h2>
                <p>{t('team.oc23')}</p>
                <p>piotr.wagstyl@gtcpoland.com </p>
              </div>
              <div className="team-col col-5 col-lg-3">
                <Image
                  src="/team/26.png"
                  width={300} height={300}
                  alt="GTC team pic"
                />
                <h2>Agnieszka Porczyńska</h2>
                <p>{t('team.oc26')}</p>
                <p>agnieszka.porczynska@gtcpoland.com</p>
              </div>
              <div className="team-col col-5 col-lg-3"></div>
              <div className="team-col col-5 col-lg-3"></div>
            </div>
          </AnimateWrapp>
        </div>
      </section>
      <ContactFooter/>
      <Footer/>
    </>
  );
}
