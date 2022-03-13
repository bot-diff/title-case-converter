import {
  Flex,
  Spacer,
  Tooltip,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGlobeAfrica, FaGithub } from 'react-icons/fa'
import { MdLightMode, MdDarkMode } from 'react-icons/md'
export default function HeaderNavbar({ t, i18n }) {
  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang)
  }
  const { toggleColorMode } = useColorMode()
  return (
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
          <MenuItem icon={<>🇬🇧</>} onClick={() => changeLanguageHandler('en')}>
            English
          </MenuItem>
          <MenuItem icon={<>🇩🇪</>} onClick={() => changeLanguageHandler('de')}>
            Deutsch
          </MenuItem>
          <MenuItem icon={<>🇫🇷</>} onClick={() => changeLanguageHandler('fr')}>
            Français
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  )
}
