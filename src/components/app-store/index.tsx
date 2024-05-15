import {
  Box,
  Heading,
  Text,
  Container,
  Link,
  Icon,
  Stack,
  Flex,
  Image,
  Button,
  chakra
} from '@chakra-ui/react'
import { FaApple, FaGooglePlay } from 'react-icons/fa'
import { AppStoreButton } from './AppStoreButton'

export const AppStores = () => {
  return (
    <Box bg={'blue.700'} pb={4} py={10} color={'white'}>
      <Flex flexDir={'row'} justify={'center'} align={'center'}>
        <Flex flexDir={'column'} justify={'center'} align={'center'}>
          <Container maxW="900px">
            <Heading mb={2} textAlign={'center'} fontWeight={'bold'}>
              O nosso serviço cabe na <chakra.span color={'orange'}>palma da sua mão</chakra.span>
            </Heading>
            <Text textAlign={'center'} mt={5}>
              Exploramos novos horizontes com uma abordagem inovadora e única, moldada especialmente
              para se alinhar perfeitamente aos seus requisitos.
            </Text>
          </Container>
          <Stack
            mt={5}
            spacing={3}
            direction={{ base: 'column', sm: 'row' }}
          >
            <AppStoreButton icon={FaApple} text="Mac App Store" />
            <AppStoreButton icon={FaGooglePlay} text="Google Play" />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  )
}
