import React from "react"
import { AnimateWrapp } from "./animateWrapp";
import { useTranslation } from "react-i18next";

const NavBarSub = () => {
  const { t } = useTranslation();

  return (
    <section className="sub-content-head baner">
      <div className="container">
        <AnimateWrapp>
          <div className="baner-content-wrapp px-3">
            <h5>{t('global.txt1')}</h5>
          </div>
        </AnimateWrapp>
      </div>
    </section>
  )
}

export default NavBarSub
