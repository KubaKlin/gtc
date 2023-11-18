import { useEffect } from "react";
import PageHead from '../../components/pagehead'
import NavBar from '../../components/navbar'
import SideBarOther from '../../components/sideBarOther'
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
                <h2>{t('service.txt8')}</h2>
                <h4>
                  {t('service.subtxt81')}
                </h4>
                <p>
                  {t('service.subtxt82')}<br/>
                  {t('service.subtxt83')}<br/>
                  {t('service.subtxt84')}<br/>
                  {t('service.subtxt85')}<br/>
                  {t('service.subtxt86')}
                </p>
                <h4>
                  {t('service.subtxt87')}
                </h4>
                <p>
                  {t('service.subtxt88')}<br/>
                  {t('service.subtxt89')}<br/>
                  {t('service.subtxt810')}
                </p>
              </AnimateWrappLater>
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
