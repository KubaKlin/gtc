import React from "react"
import Link from 'next/link';
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <h4>{t('global.txt1')}</h4>
      <ul className="sidebar-list">
        <li>
          <Link href="/services/sea-containers">{t('service.txt1')}</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">{t('service.txt2')}</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">{t('service.txt3')}</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">{t('service.txt4')}</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">{t('service.txt5')}</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">{t('service.txt6')}</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">{t('service.txt7')}</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">{t('service.txt8')}</Link>
        </li>
        <li>
          <Link href="/services/sea-containers">{t('service.txt9')}</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
