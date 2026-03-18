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
                        {props.tabs.map(k => (
                        <button key={k} className={`nav-btn ${props.tab===k?"active":""}`} onClick={() => props.setTab(k)}>
                            {t(`nav.${k}`)}
                        </button>
                        ))}
                    </div>
                    <div className="lang-sw">
                        {props.languages.map(l => (
                        <button key={l} className={`lang-btn ${props.lang===l?"active":""}`} onClick={() => props.setLang(l)}>
                            {l}
                        </button>
                        ))}
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;