import {
  Flex,
  Select,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
  Stack,
  Text,
  IconButton,
  Spacer,
  Tooltip,
} from '@chakra-ui/react'
import { FaGlobeAfrica } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t, i18n } = useTranslation()
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  const { toggleColorMode } = useColorMode()
  const backgroundColor = useColorModeValue(
    'rgb(79, 128, 176, 0.075)',
    'rgb(237, 242, 247, 0.1)'
  )
  return (
    <>
      <Flex
        height="100vh"
        alignItems="flex-start"
        justifyContent="center"
        pt={150}
      >
        {/* TODO: wrap a github icon button with Flex row (as a header navbar) */}
        <Flex
          direction="column"
          width="100vh"
          // background={backgroundColor}
          p={12}
          // rounded={6}
        >
          <Stack spacing={2} mb={5}>
            <Heading as="h2" align="center" size="3xl">
              Title Case Converter
            </Heading>
            <Text align="center" fontSize="2xl">
              Convert any text into a title case format.
            </Text>
          </Stack>
          <Input
            placeholder="histoire de la baguette, de la baguette à la tradition"
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
            <option value="en">English</option>
            <option value="fr">Français</option>
          </Select>

          <Flex dir="row" mb={3} alignItems="end">
            <Text align="left" fontSize="xl">
              The result:
            </Text>
            <Spacer />
            <Tooltip label="Copy" placement="auto" hasArrow>
              <IconButton
                colorScheme="blue"
                aria-label="Copy to clipboard"
                icon={<MdContentCopy />}
              />
            </Tooltip>
          </Flex>
        </Flex>
        <Flex
          maxWidth="100vh"
          height="25vh"
          style={{ backgroundColor }}
          rounded={10}
        >
          <Text p={4} fontSize="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci
            nulla pellentesque dignissim enim.
          </Text>
        </Flex>
        <Button onClick={toggleColorMode}>change theme</Button>
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
      </Flex>
    </>
  )
}
