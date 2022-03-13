import {
  Flex,
  Select,
  Heading,
  Input,
  useColorMode,
  useColorModeValue,
  Stack,
  Text,
  IconButton,
  Spacer,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { FaGlobeAfrica, FaGithub } from 'react-icons/fa'
import { MdContentCopy, MdLightMode, MdDarkMode } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t, i18n } = useTranslation()
  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang)
  }

  const { toggleColorMode } = useColorMode()

  return (
    <>
      <Flex dir="row" alignItems="center" py={4} px={5}>
        <Tooltip label={t('Source code on GitHub')} placement="right" hasArrow>
          <IconButton
            variant="outline"
            aria-label="Source code"
            onClick={() =>
              window.open('https://github.com/bot-diff/title-case-converter')
            }
            icon={<FaGithub />}
          />
        </Tooltip>
        <Spacer />
        <Tooltip
          label={useColorModeValue(
            t('Switch to dark mode'),
            t('Switch to light mode')
          )}
          placement="left"
          hasArrow
        >
          <IconButton
            variant="outline"
            aria-label="Switch mode"
            onClick={toggleColorMode}
            icon={useColorModeValue(<MdDarkMode />, <MdLightMode />)}
            mr={2}
          />
        </Tooltip>
        <Menu>
          <Tooltip label={t('Change language')} placement="bottom-end" hasArrow>
            <MenuButton
              as={IconButton}
              aria-label="Languages"
              icon={<FaGlobeAfrica />}
              variant="outline"
            />
          </Tooltip>
          <MenuList>
            <MenuItem
              icon={<>🇬🇧</>}
              onClick={() => changeLanguageHandler('en')}
            >
              English
            </MenuItem>
            <MenuItem
              icon={<>🇩🇪</>}
              onClick={() => changeLanguageHandler('de')}
            >
              Deutsch
            </MenuItem>
            <MenuItem
              icon={<>🇫🇷</>}
              onClick={() => changeLanguageHandler('fr')}
            >
              Français
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>

      <Flex
        height="90vh"
        alignItems="center"
        justifyContent="start"
        direction="column"
      >
        <Flex direction="column" width="100vh" p={12} pt={125}>
          <Stack spacing={2} mb={5}>
            <Heading as="h2" align="center" size="3xl">
              {t('Title Case Converter')}
            </Heading>
            <Text align="center" fontSize="2xl">
              {t('Convert any text into a title case format.')}
            </Text>
          </Stack>
          <Input
            placeholder={t('the quick brown fox jumps over the lazy dog')}
            variant="outline"
            _placeholder={{ color: 'gray.400' }}
            fontSize="20px"
            mb={3}
            size="lg"
            type="text"
            textAlign="center"
            bg="gray.100"
            color="gray.700"
          />

          <Select icon={<FaGlobeAfrica />} width={150} size="sm" mb={1}>
            <option value="en" selected>
              English
            </option>
            <option value="fr">Français</option>
          </Select>

          <Flex dir="row" mb={3} alignItems="end">
            <Text align="left" fontSize="xl">
              {t('The result:')}
            </Text>
            <Spacer />
            <Tooltip label={t('Copy')} placement="auto" hasArrow>
              <IconButton
                colorScheme="blue"
                aria-label="Copy to clipboard"
                icon={<MdContentCopy />}
              />
            </Tooltip>
          </Flex>

          <Flex
            maxWidth="100vh"
            height="25vh"
            style={{
              backgroundColor: useColorModeValue(
                'rgb(79, 128, 176, 0.075)',
                'rgb(237, 242, 247, 0.1)'
              ),
            }}
            rounded={10}
          >
            <Text p={4} fontSize="xl">
              {t('Lorem ipsum')}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}
