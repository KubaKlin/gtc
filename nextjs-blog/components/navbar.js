import Link from 'next/link';
import Image from 'next/image'

import { useTranslation } from 'react-i18next';
import '../i18n.js';

const NavBar = () => {
  const { t, i18n } = useTranslation();
  const lngs = {
    en: { nativeName: 'English' },
    de: { nativeName: 'Deutsch' }
  };

  return (
    <header className="text-white nav-bar">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none">
            <Image
              src="/logo.svg"
              width={130} height={87}
              alt="GTC logo"
            />
          </a>

          <div className="text-end d-flex">
            <ul className="nav col-12 text-end col-lg-auto me-lg-auto justify-content-center">
              <li><Link href="/" className="nav-link px-2 text-white">{t('navbar.link1')}</Link></li>
              <li><Link href="/about" className="nav-link px-2 text-white">{t('navbar.link2')}</Link></li>
              <li><a href="#" className="nav-link px-2 text-white">{t('navbar.link3')}</a></li>
              <li><a href="#" className="nav-link px-2 text-white">{t('navbar.link4')}</a></li>
            </ul>
            <div className="dropdown ms-2">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                id="dropdownMenuButton1"
                aria-expanded="false"
              >
                {i18n.resolvedLanguage}
              </button>
              <ul className="dropdown-menu px-2" aria-labelledby="dropdownMenuButton1">
                {Object.keys(lngs).map((lng) => (
                  <li key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                    {lngs[lng].nativeName}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavBar
