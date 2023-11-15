import React from "react"
import Link from 'next/link';
import { useTranslation } from "react-i18next";

const SideBarOther = () => {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <h4>{t('card.txt1')}</h4>
      <ul className="sidebar-list">
        <li>
          <Link href={t('card.link')}>{t('card.txt2')}</Link>
        </li>
      </ul>
    </div>
  )
}

export default SideBarOther
