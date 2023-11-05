import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpApi) // verwendet das i18next-http-backend
  .use(LanguageDetector) // erkennt die Sprache des Benutzers
  .use(initReactI18next) // initialisiert react-i18next
  .init({
    fallbackLng: "en",
    debug: true,
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage', 'cookie']
    },
    backend: {
      // der Pfad zu Ihren Übersetzungsdateien
      loadPath: '/grafolution/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false // not needed for react as it escapes by default
    },
    react: {
      useSuspense: false // falls Sie Suspense nicht verwenden
    },
  });

export default i18n;
