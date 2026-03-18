// import logo from '../assets/logo.svg';

import { useTranslation } from 'react-i18next'

function Header(props){
    const { t, i18n } = useTranslation();

    return(
        <>
            <header>
                {/* NAV */}
                <nav>
                    <div className="nav-logo">☕ <span>Çay</span> Evi</div>
                    <div className="nav-links">
                        {props.tabs.map(tab => (
                        <button key={tab} className={`nav-btn ${props.tab===tab ? "active":""}`} onClick={() => props.setTab(tab)}>
                            {t(`nav.${tab}`)}
                        </button>
                        ))}
                    </div>
                    <div className="lang-sw">
                        {props.languages.map(lang => (
                        <button 
                            key={lang}
                            className={`lang-btn ${props.lang===lang?"active":""}`} 
                            onClick={() => {
                                props.setLang(lang)
                                i18n.changeLanguage(lang);
                            }
                        }>
                            {lang}
                        </button>
                        ))}
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;