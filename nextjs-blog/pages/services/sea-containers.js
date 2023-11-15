import { useEffect } from "react";
import PageHead from '../../components/pagehead'
import NavBar from '../../components/navbar'
import SideBarOther from '../../components/SideBarOther'
import Footer from '../../components/footer'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import '../../i18n.js';
import { useTranslation } from 'react-i18next';
import { AnimateWrapp } from "../_app";
import ContactFooter from "../../components/contact_foot";


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
              <h5>{t('global.txt1')}</h5>
            </div>
          </AnimateWrapp>
        </div>
      </section>

      <section className="our-team sub-content">
        <div className="container">
          <div className="row">
            <div className="col-8 sub-content-wrapp">
              <AnimateWrapp>
                <h2>Sea containers</h2>

                <h4>
                  Kierunki eksportowe: Chiny, Rosja, UE<br/>
                  Kierunki importowe: Indie (realizowany odcinkiem SEA), UE.
                </h4>

                <p>
                  Dedykowane rozwiązania logistyczne Door to Dior z uwzględnieniem transportu intermodalnego,
                  realizacja transportu kolejowego za pośrednictwem stałych operatorów z wykorzystaniem własnych Tank Containers 20-23′,
                  indywidualny opiekun 24/7 czuwający nad poprawnym przebiegiem transportu.
                </p>
                <Image
                  src="/services/sea-transport.jpg"
                  width={600} height={300}
                  alt="GTC team pic"
                />
                <p>
                  Flota wyposażona w naczepy do transportu kontenerów 20′ / 40′ / 40′ HC / 45′.

                  dysponujemy ciągnikami 3-osiowymi,
                  obsługujemy terminale w Dąbrowie Górniczej, Sławkowie, Gliwicach, Włosienicy, jak i w Brzegu Dolnym, Kątach Wrocławskich i Małaszewiczach,
                  oferujemy odmowy kontenerów w kraju i za granicą.

                  Stałe połączenia liniowe: PL-NL, NL-DE, DE-PL, NL-SK, DE-ES
                </p>
              </AnimateWrapp>
            </div>
            <div className="col-4">
              <SideBarOther/>
            </div>
          </div>
        </div>
      </section>
      <ContactFooter/>
      <Footer/>
    </>
  );
}
