import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import en_translation from './locales/en/translation.json'
import de_translation from './locales/de/translation.json'
import fr_translation from './locales/fr/translation.json'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: { translation: en_translation },
      de: { translation: de_translation },
      fr: { translation: fr_translation },
    },
  })

export default i18n
