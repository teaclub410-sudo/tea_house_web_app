import { useTranslation } from 'react-i18next'

function Home(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
        <div className="page fade-in">
            <div className="hero">
                <div className="hero-glow-1" /><div className="hero-glow-2" />
                <div className="hero-line hero-line-1" /><div className="hero-line hero-line-2" />
                <div className="hero-badge">{t('home.badge')}</div>
                <div className="hero-teacup">☕</div>
                <h1 className="hero-title">{t('home.title')}</h1>
                <span className="hero-title-accent">{t('home.subtitle')}</span>
                <p className="hero-tagline">{t('home.tagline')}</p>
                <div className="hero-btns">
                <button className="btn-primary" onClick={() => props.setTab("menu")}>{t('home.cta')}</button>
                <button className="btn-outline"  onClick={() => props.setTab("contact")}>{t('home.ctaSub')}</button>
                </div>
            </div>

            <div className="section">
                <div className="divider">
                <div className="divider-line"/><span className="divider-icon">🍃</span><div className="divider-line"/>
                </div>
                <h2 className="sec-title">{t('home.featTitle')}</h2>
                <p className="sec-sub"></p>
                <div className="feat-grid">
                {t('home.features', { returnObjects: true }).map((f,i) => (
                    <div key={i} className="feat-card">
                    <div className="feat-icon">{f.icon}</div>
                    <div className="feat-title">{f.title}</div>
                    <div className="feat-desc">{f.desc}</div>
                    </div>
                ))}
                </div>

                <div className="hours-card">
                <div className="hours-title">🕐 {t('home.hours')}</div>
                {t('home.hoursData', { returnObjects: true }).map((h,i) => (
                    <div key={i} className="hours-row">
                    <span className="hours-day">{h.day}</span>
                    <span className="hours-time">{h.time}</span>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </>
  );
}

export default Home;