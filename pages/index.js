import Head from 'next/head'
import { useTranslation } from 'react-i18next'
import HeaderNavbar from '../components/HeaderNavbar'
import MainBody from '../components/MainBody'

export default function Home() {
  const { t, i18n } = useTranslation()
  return (
    <>
      <Head>
        <title>Title Case Converter</title>
        <meta
          name="description"
          content="Convert any text into a title case format"
        />
        <meta name="google-site-verification" content="zvC1nvPqvpqL97fXDh_zrqVY6k3Cms7O3iksGrreI0w" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <HeaderNavbar t={t} i18n={i18n} />
      <MainBody t={t} />
    </>
  )
}
