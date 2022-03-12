import {
  Flex,
  Select,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGlobeAfrica } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const { toggleColorMode } = useColorMode()
  const backgroundColor = useColorModeValue('gray.100', 'gray.700')
  return (
    <>
      <Flex
        direction="column"
        height="100vh"
        alignItems="center"
        justifyContent="center"
        pt={150}
      >
        <Flex
          direction="column"
          background={backgroundColor}
          p={12}
          rounded={6}
        >
          <Heading mb={6}>{t('login')}</Heading>
          <Input placeholder="test input" variant="filled" mb={3} type="text" />
          <Button mb={6} colorScheme="teal">
            submit
          </Button>
          <Button onClick={toggleColorMode}>change theme</Button>
        </Flex>
      </Flex>
      <Flex>
        <Flex dir="row" alignItems="center">
          <Select
            icon={<FaGlobeAfrica />}
            width={150}
            size="sm"
            mb={3}
            id="lang"
            onChange={(e) => changeLanguage(e.target.value)}
          >
            <option value="en" selected>
              English
            </option>
            <option value="de">Deutsch</option>
          </Select>
        </Flex>
      </Flex>
    </>
  )
}
