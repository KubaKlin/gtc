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
          <Link href="/services/ftl-transport">{t('service.txt2')}</Link>
        </li>
        <li>
          <Link href="/services/recycling">{t('service.txt3')}</Link>
        </li>
        <li>
          <Link href="/services/dump-trucks">{t('service.txt4')}</Link>
        </li>
        <li>
          <Link href="/services/expressltl">{t('service.txt5')}</Link>
        </li>
        <li>
          <Link href="/services/crops">{t('service.txt6')}</Link>
        </li>
        <li>
          <Link href="/services/storage">{t('service.txt7')}</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
