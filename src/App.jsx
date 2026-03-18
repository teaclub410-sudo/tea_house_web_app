import './App.css';
import Steam from './pages/steam';
import Header from './pages/header';
import Main from './pages/main';
import Footer from './pages/footer';

import React, {useState} from 'react';

function App() {
  const tabs = ["home", "about", "contact", "menu"];
  const languages = ["az", "en", "ru"];

  const title = "Tea House";
  const phone = "+994 12 555 77 88";
  const email = "info@çayevi.az";

  const instagram = "@cayevi.baku";
  const threads = "@cayevi.baku";
  const whatsapp = "+994 12 555 77 88";

  const [tab, setTab] = useState("menu");
  const [lang, setLang] = useState("az");

  return (
    <>
      <Steam />
      <div className="app">
          <Header tab={tab} tabs={tabs} lang={lang} languages={languages} title={title} setTab={setTab} setLang={setLang}></Header>
          <Main title={title} tab={tab} phone={phone} email={email} instagram={instagram} threads={threads} whatsapp={whatsapp} setTab={setTab} ></Main>
          <Footer></Footer>
      </div>
    </>
  );
}

export default App;

/*

  git add .
  git commit -m "restore front"
  git push origin master
 
*/