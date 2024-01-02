import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          aboutMe: {
            value: 'About me',
            degreePart1: 'Computer Systems',
            degreePart2: 'Engineer',
            job: 'Software Developer',
          },
          header: {
            hello: 'Hello',
            im: "I am",
            welcome: 'Welcome to my webpage!',
          },
          alts: {
            photo: 'my photo',
          },
          info: {
            yearsOfExperience: 'Years of experience as a software developer',
            graduatedFrom: 'Graduated from',
            english: 'English',
            latinAmerica: 'Latin America',
            getMy: 'Download my',
          },
        },
      },
      es: {
        translation: {
          aboutMe: {
            value: 'Sobre mí',
            degreePart1: 'Ingeniero en Sistemas',
            degreePart2: 'Computacionales',
            job: 'Desarrollador de Software',
          },
          header: {
            hello: 'Hola',
            im: 'soy',
            welcome: '¡Bienvenido(a) a mi página!',
          },
          alts: {
            photo: 'mi foto',
          },
          info: {
            yearsOfExperience: 'Años de experiencia como desarrollador de software',
            graduatedFrom: 'Egresado del',
            english: 'Inglés Intermedio-Alto',
            latinAmerica: 'América Latina',
            getMy: 'Descarga mi',
          },
        },
      },
    },
  },
)
