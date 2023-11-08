import '../i18n.js';
import Image from "next/image";
import React from "react";
import {useTranslation} from "react-i18next";
import {AnimateWrapp} from "../pages/_app";
import Link from "next/link";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="contact-map">
        <div className="d-flex align-items-center">
          <div className="col-12 col-lg-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10228.910384002313!2d19.195441!3d50.138174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c10c28f80f2b%3A0x343f422aec4558b1!2sGTC%20POLAND%20Sp.%20z%20o.o.!5e0!3m2!1spl!2spl!4v1699443026042!5m2!1spl!2spl"
              width="100%" height="550" allowFullScreen="" loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className="col-12 col-lg-6">
            <div className="baner-content-wrapp">
              <AnimateWrapp>
                <h3>Contact with us</h3>
                <h4>{t('baner.h1')}</h4>
                <p>{t('baner.p')}</p>
                <Link className="button" href="/">Send email</Link>
              </AnimateWrapp>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-12 footer-content">
            <Image
              src="/logo.svg"
              width={130} height={87}
              alt="GTC logo"
              className="nav-logo"
            />
          </div>
          <div className="col-3 footer-copy">
            ul. Imielińska 167<br/>
            41-407 Imielin<br/>
            e-mail: biuro@gtcpoland.com<br/>
            tel.: (32) 739 06 77<br/>
            fax.: (32) 739 08 58<br/>
          </div>
          <div className="col-3 footer-copy">
            Kapitał zakładowy: 50 000 zł<br/>
            Sąd Rejonowy Katowice-Wschód<br/>
            Wydział VIII Gospodarczy <br/>Krajowego Rejestru Sądowego
          </div>
          <div className="col-3 footer-copy">
            {t('footer.txt')}<br/>
            Handcrafted by
            <a href="http://www.kubaklin.pl" target="_blank">
              Kuba Klin
            </a>
          </div>
        </div>
        <div className="row text-center footer-cop">
          <span>
            2023 © GTC. All rights reserved <br/>
            Handcrafted by
            <a href="http://www.kubaklin.pl" target="_blank">
              Kuba Klin
            </a>
          </span>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer
