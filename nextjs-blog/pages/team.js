import { useEffect } from "react";
import PageHead from '../components/pagehead'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import 'bootstrap/dist/css/bootstrap.css';
import '../i18n.js';
import { useTranslation } from 'react-i18next';
import { AnimateWrapp } from "../components/animateWrapp";
import ContactFooter from "../components/contact_foot";
import { staffMembers } from "../data/staffMembers";
import StaffMember from "../components/staffMember";


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

          </AnimateWrapp>
          <AnimateWrapp>
            <div className="row mb-5">
              {staffMembers.map((item) => (
                <StaffMember
                  name={item.name}
                  desc={item.desc}
                  image={item.image}
                  //mail={item.mail}
                />
              ))}
            </div>
          </AnimateWrapp>
        </div>
      </section>
      <ContactFooter/>
      <Footer/>
    </>
  );
}
