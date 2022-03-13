import { useTranslation } from 'react-i18next'
import HeaderNavbar from '../components/HeaderNavbar'
import MainBody from '../components/MainBody'

export default function Home() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <HeaderNavbar t={t} i18n={i18n} />
      <MainBody t={t} />
    </>
  )
}
