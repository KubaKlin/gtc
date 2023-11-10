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
