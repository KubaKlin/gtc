import '../i18n.js';
import Image from "next/image";
import React from "react";

const Footer = () => {

  return (
    <>
      <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-12 footer-content mb-ms-0 mb-4">
            <Image
              src="/logo.svg"
              width={130} height={87}
              alt="GTC logo"
              className="nav-logo"
            />
          </div>
          <div className="col-md-3 col-12 footer-copy mb-ms-0 mb-4">
            GTC Poland Sp. z o.o.<br/>
            ul. Imielińska 167<br/>
            41-407 Imielin<br/>
          </div>
          <div className="col-md-3 col-12 footer-copy mb-ms-0 mb-4">
            tel.: (32) +48 739 06 77<br/>
            fax.: (32) +48 739 08 58<br/>
          </div>
          <div className="col-md-3 col-12 footer-copy mb-ms-0 mb-4">
            Kapitał zakładowy: 50 000 zł<br/>
            Sąd Rejonowy Katowice-Wschód<br/>
            Wydział VIII Gospodarczy <br/>Krajowego Rejestru Sądowego
          </div>
        </div>
        <div className="row text-center footer-cop">
          <span>
            2025 © GTC. All rights reserved <br/>
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
