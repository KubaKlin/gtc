import React, { useState, useEffect } from "react"

import Link from 'next/link';
import Image from 'next/image'

import { useTranslation } from 'react-i18next';
import '../i18n.js';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const langs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' }
  };
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY > 66) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <header className={navbar ? "nav-bar scrolled" : "nav-bar"}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
            <Image
              src="/logo.svg"
              width={130} height={87}
              alt="GTC logo"
              className="nav-logo"
            />
          </a>

          <nav className="text-end d-flex">
            <ul className="nav col-12 text-end col-lg-auto me-lg-auto justify-content-center">
              <li><Link href="/" className="nav-link px-2 text-white">{t('navbar.link1')}</Link></li>
              <li><Link href="/#about" className="nav-link px-2 text-white">{t('navbar.link2')}</Link></li>

              <li className="nav-item dropdown">
                <a className="nav-link text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {t('navbar.link3')}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link href="/services/sea-containers" className="nav-link px-4">{t('navbar.service.link1')}</Link></li>
                </ul>
              </li>

              <li><Link href="/#about" className="nav-link px-2 text-white">{t('navbar.link4')}</Link></li>
              <li><a href="#footer" className="nav-link px-2 text-white">{t('navbar.link5')}</a></li>
            </ul>
            <div className="dropdown ms-5">
              <button
                className="button outline button-lang"
                type="button"
                data-bs-toggle="dropdown"
                id="dropdownMenuButton1"
                aria-expanded="false"
              >
                {i18n.resolvedLanguage}
              </button>
              <ul className="dropdown-menu px-2" aria-labelledby="dropdownMenuButton1">
                {Object.keys(langs).map((lng) => (
                  <li key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    {langs[lng].nativeName}
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavBar
