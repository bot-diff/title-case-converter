import {
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react'

export default function Home() {
  const { toggleColorMode } = useColorMode()
  const backgroundColor = useColorModeValue('gray.100', 'gray.700')
  return (
    <Flex
      height="100vh"
      alignItems="flex-start"
      justifyContent="center"
      pt={150}
    >
      <Flex direction="column" background={backgroundColor} p={12} rounded={6}>
        <Heading mb={6}>Login</Heading>
        <Input placeholder="test input" variant="filled" mb={3} type="text" />
        <Button mb={6} colorScheme="teal">
          submit
        </Button>
        <Button onClick={toggleColorMode}>change theme</Button>
      </Flex>
    </Flex>
  )
}
