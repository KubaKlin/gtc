import '../i18n.js';
import React from "react";
import {useTranslation} from "react-i18next";
import {AnimateWrapp} from "../pages/_app";
import Link from "next/link";

const ContactFooter = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="gtc-brag">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-5">
              <AnimateWrapp>
                <h4>GTC Poland</h4>
                <h3>The best people to take care of your cargo</h3>
              </AnimateWrapp>
            </div>
            <div className="col-12 col-lg d-flex">
              <Link className="button outline" href="/about">Contact us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactFooter
