import React, {useState, useEffect} from "react"

import Link from 'next/link';
import Image from 'next/image'

import {useTranslation} from 'react-i18next';
import '../i18n.js';

const NavBar = () => {
  const {t, i18n} = useTranslation();
  const langs = {
    pl: {nativeName: 'Polish'},
    en: {nativeName: 'English'},
    de: {nativeName: 'Deutsch'},
    nl: {nativeName: 'Netherland'},
    fr: {nativeName: 'France'},
    it: {nativeName: 'Italy'},
    ua: {nativeName: 'Ukrain'},
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
              <li>
                <Link href="/" className="nav-link px-2 text-white">
                  {t('global.link1')}
                </Link>
              </li>
              <li>
                <Link href="/#about" className="nav-link px-2 text-white">
                  {t('global.link2')}
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link text-white" href="#" id="navbarDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  {t('global.link3')}
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href="/services/sea-containers" className="nav-link px-3">
                      {t('service.txt1')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ftl-transport" className="nav-link px-3">
                      {t('service.txt2')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/recycling" className="nav-link px-3">
                      {t('service.txt3')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/dump-trucks" className="nav-link px-3">
                      {t('service.txt4')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/expressltl" className="nav-link px-3">
                      {t('service.txt5')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/crops" className="nav-link px-3">
                      {t('service.txt6')}
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/storage" className="nav-link px-3">
                      {t('service.txt7')}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link href="/#about" className="nav-link px-2 text-white">
                  {t('global.link4')}
                </Link>
              </li>
              <li>
                <Link href="/services/for-carriers" className="nav-link px-2 text-white">
                  {t('global.link8')}
                </Link>
              </li>
              <li>
                <a href="#footer" className="nav-link px-2 text-white">
                  {t('global.link5')}
                </a>
              </li>
              <li className="dropdown ms-5">
              <button
                className="button outline button-lang" type="button" data-bs-toggle="dropdown"
                id="dropdownMenuButton1" aria-expanded="false"
              >
                {i18n.resolvedLanguage}
              </button>
              <ul className="dropdown-menu px-2" aria-labelledby="dropdownMenuButton1">
                {Object.keys(langs).map((lng) => (
                  <li className="nav-link px-2 py-2" key={lng}
                      style={{fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal'}} type="submit"
                      onClick={() => i18n.changeLanguage(lng)}
                  >
                    {langs[lng].nativeName}
                  </li>
                ))}
              </ul>
            </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default NavBar
