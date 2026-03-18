import { useTranslation } from 'react-i18next'


function About() {
  const { t, i18n } = useTranslation();
  return (
    <>
        <div className="page fade-in">
            <div className="page-hdr">
                <div className="page-hdr-title"><span>{t('about.title')}</span></div>
                <div className="page-hdr-sub">{t('about.sub')}</div>
            </div>
            <div className="section" style={{paddingTop:32}}>
                <div className="about-grid">
                    <div className="about-visual">
                        <div className="about-year">2010</div>
                        <div className="about-teacup">🫖</div>
                        <div className="about-stats">
                        <div className="about-stat">
                            <div className="about-stat-val">2010</div>
                            <div className="about-stat-label">{t('about.founded')}</div>
                        </div>
                        <div className="about-stat">
                            <div className="about-stat-val">50K+</div>
                            <div className="about-stat-label">{t('about.guests')}</div>
                        </div>
                        <div className="about-stat">
                            <div className="about-stat-val">40+</div>
                            <div className="about-stat-label">{t('about.varieties')}</div>
                        </div>
                        </div>
                    </div>
                <div>
                    <p className="about-text">{t('about.story')}</p>
                    <p className="about-text">{t('about.story2')}</p>
                    <div className="val-title">{t('about.valTitle')}</div>
                        <div className="vals">
                            {t('about.values', { returnObjects: true }).map((v,i) => <span key={i} className="val-chip">{v}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default About;