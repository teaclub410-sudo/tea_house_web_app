import { useTranslation } from 'react-i18next'


function Contact(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
        <div className="page fade-in">
            <div className="page-hdr">
                <div className="page-hdr-title"><span>{t('contact.title')}</span></div>
                <div className="page-hdr-sub">{t('contact.sub')}</div>
            </div>
            <div className="section" style={{paddingTop:32}}>
                <div className="contact-grid">

                    {/* Info */}
                    <div>
                        <div className="contact-info-card">
                            {[
                            { label: t('contact.address'), value: t('contact.addressVal'), icon: "📍" },
                            { label: t('contact.phone'), value: props.phone, icon: "📞" },
                            { label: t('contact.email'), value: props.email, icon: "✉️" },
                            ].map((row,i) => (
                            <div key={i} className="contact-block">
                                <div className="contact-label">{row.icon} {row.label}</div>
                                <div className="contact-value">{row.value}</div>
                            </div>
                            ))}
                        </div>
                        <div className="map-placeholder">
                            <span style={{fontSize:"2rem"}}>🗺️</span>
                            <span>Nizami küçəsi 42, Bakı</span>
                        </div>
                        </div>

                        {/* Social */}
                        <div className="social-card">
                        <div className="social-title">{t('contact.social')}</div>
                        <div className="social-sub">{t('contact.follow')}</div>
                        <div className="social-links">
                            {[
                            { icon:"📸", name:"Instagram", handle:props.instagram, color:"#E1306C" },
                            // { icon:"🧵", name:"Threads",   handle:props.threads, color:"#000000" },
                            { icon:"📱", name:"WhatsApp",  handle:props.whatsapp, color:"#25D366" },
                            ].map((s,i) => (
                            <div key={i} className="social-link">
                                <div className="social-icon">{s.icon}</div>
                                <div>
                                <div className="social-name">{s.name}</div>
                                <div className="social-handle">{s.handle}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  );
}

export default Contact;