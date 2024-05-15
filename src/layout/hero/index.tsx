import * as React from 'react'
import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  Image,
  Skeleton,
  Box,
  Link,
  Icon
} from '@chakra-ui/react'
import { MdBolt } from 'react-icons/md'
import { ItemBank } from './item'

const HeroSection = () => {
  return (
    <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="480px">
          <chakra.h1
            fontSize="5xl"
            lineHeight={1}
            fontWeight="bold"
            textAlign="left"
            color={'blue.400'}
          >
            Bank Digitus
            <br />
            <chakra.span color={'white'}>A melhor opção. </chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            Usando nosso app, você pode fazer transferências e pagar suas contas com zero taxas.
          </Text>
          <ItemBank/>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
            <chakra.button
              w={{ base: '100%', sm: 'auto' }}
              h={12}
              px={6}
              color="white"
              fontSize="lg"
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              bgGradient="linear(to-l, #0ea5e9,#2563eb)"
              _hover={{ bgGradient: 'linear(to-l, #0ea5e9,#2563eb)', opacity: 0.9 }}
            >
              <chakra.span> Abrir sua conta na Digitus </chakra.span>
              <Icon as={MdBolt} h={4} w={4} ml={1} />
            </chakra.button>
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }}>
          <Image
            w="100%"
            h="100%"
            minW={{ base: 'auto', md: '30rem' }}
            objectFit="cover"
            src={`/svg/Credit card-rafiki.svg`}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
  )
}

export default HeroSection
