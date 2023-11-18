import { useEffect } from "react";
import PageHead from '../../components/pagehead'
import NavBar from '../../components/navbar'
import SideBar from '../../components/sideBar'
import NavBarSub from '../../components/navBarSub'
import Footer from '../../components/footer'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css';
import '../../i18n.js';
import { useTranslation } from 'react-i18next';
import { AnimateWrappLater } from "../_app";
import ContactFooter from "../../components/contact_foot";


export default function Home() {
  const { t } = useTranslation();
  useEffect(() => { import("bootstrap/dist/js/bootstrap"); }, []);

  return (
    <>
      <PageHead/>
      <NavBar />
      <NavBarSub/>

      <section className="our-team sub-content">
        <div className="container">
          <div className="row">
            <div className="col-8 sub-content-wrapp">
              <AnimateWrappLater>
                <h2>{t('service.txt6')}</h2>
                <p>
                  {t('service.subtxt61')}
                </p>
                <p>
                  {t('service.subtxt62')}
                </p>
                <Image
                  src="/services/crops.png"
                  width={600} height={300}
                  alt="GTC team pic"
                />
                <p>
                  {t('service.subtxt63')}
                </p>
                <p>
                  {t('service.subtxt64')}
                </p>
                <p>
                  {t('service.subtxt65')}<br/>
                  {t('service.subtxt66')}<br/>
                  {t('service.subtxt67')}<br/>
                  {t('service.subtxt68')}<br/>
                  {t('service.subtxt69')}<br/>
                  {t('service.subtxt611')}<br/>
                  {t('service.subtxt612')}<br/>
                  {t('service.subtxt613')}<br/>
                  {t('service.subtxt614')}<br/>
                  {t('service.subtxt615')}<br/>
                  {t('service.subtxt616')}<br/>
                  {t('service.subtxt617')}<br/>
                </p>
              </AnimateWrappLater>
            </div>
            <div className="col-4">
              <SideBar/>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter/>
      <Footer/>
    </>
  );
}
