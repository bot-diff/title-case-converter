import {
  Flex,
  Select,
  Heading,
  Input,
  Stack,
  Text,
  IconButton,
  Spacer,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaGlobeAfrica } from 'react-icons/fa'
import { MdContentCopy } from 'react-icons/md'

export default function MainBody({ t }) {
  return (
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
          _placeholder={{
            color: 'gray.400',
          }}
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
  )
}
