import { useEffect } from "react";
import PageHead from '../../components/pagehead'
import NavBar from '../../components/navbar'
import SideBar from '../../components/SideBar'
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
                <h2>{t('service.txt1')}</h2>
                <h4>
                  {t('service.subtxt11')}<br/>
                  {t('service.subtxt12')}
                </h4>
                <p>
                  {t('service.subtxt13')}
                </p>
                <Image
                  src="/services/sea-transport.jpg"
                  width={600} height={300}
                  alt="GTC team pic"
                />
                <p>
                  {t('service.subtxt14')}
                </p>
                <p>
                  {t('service.subtxt15')}
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
