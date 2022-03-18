import { ChakraProvider } from '@chakra-ui/react'
import { I18nextProvider } from 'react-i18next'
import theme from '../utils/theme'
import i18next from 'i18next'
import '../i18n/i18n'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <I18nextProvider i18n={i18next}>
        <Component {...pageProps} />
      </I18nextProvider>
    </ChakraProvider>
  )
}

export default MyApp
