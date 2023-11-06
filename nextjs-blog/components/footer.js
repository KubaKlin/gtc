import { useTranslation } from 'react-i18next';
import '../i18n.js';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div class="container">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('footer.txt')}
      </a>
      </div>
    </footer>
  )
}

export default Footer
