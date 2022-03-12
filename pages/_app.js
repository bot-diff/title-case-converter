import { ChakraProvider } from '@chakra-ui/react'
import './i18n'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <I18nextProvider i18n={i18next}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ChakraProvider>
  )
}

export default MyApp
