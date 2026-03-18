import { useTranslation } from 'react-i18next'


function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <>
        <footer>
            <span>🍵</span> {t('footer')}
        </footer>
    </>
  );
}

export default Footer;