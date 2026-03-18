import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import global_az from "./translation/az/global.json";
import global_en from "./translation/en/global.json";
import global_ru from "./translation/ru/global.json";

const resources = {
    az: {
        translation: global_az
    },
    en: {
        translation: global_en
    },
    ru: {
        translation: global_ru
    },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "az",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;