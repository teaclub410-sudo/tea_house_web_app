import { useTranslation } from 'react-i18next'

import React, {useState} from 'react';


function Menu() {
  const { t, i18n } = useTranslation();

  const categories = t('menu.categories', { returnObjects: true });
  const items = t('menu.items', { returnObjects: true });

  const [menuCat, setMenuCat] = useState(0); // "All" / "Hamısı" etc.

  const filteredMenu = menuCat === 0
    ? items
    : items.filter(item => item.cat === categories[menuCat]);

  return (
    <>
        <div className="page fade-in">
            <div className="page-hdr">
                <div className="page-hdr-title"><span>{t('menu.title')}</span></div>
                <div className="page-hdr-sub">{t('menu.sub')}</div>
            </div>
            <div className="section" style={{paddingTop:32}}>
                <div className="menu-cats">
                {categories.map((c,i) => (
                    <button key={i} className={`cat-btn ${menuCat===c?"active":""}`}
                    onClick={() => setMenuCat(i)}>{c}
                    </button>
                ))}
                </div>
                <div className="menu-grid">
                {filteredMenu.map(item => (
                    <div key={item.id} className="menu-card">
                        <div className="menu-emoji">{item.emoji}</div>
                        <div className="menu-info">
                            <div className="menu-name">{item.name}</div>
                            <div className="menu-desc">{item.desc}</div>
                        </div>
                        <div className="menu-price">{t('menu.currency')}{item.price}</div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    </>
  );
}

export default Menu;