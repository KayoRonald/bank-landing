import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { ReactElement } from 'react'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { FaMoneyBill, FaCreditCard } from "react-icons/fa";

interface FeatureProps {
  text: string
  subText: string
  iconBg: string
  icon?: ReactElement
}

const Feature = ({ text, subText, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={10} h={10} align={'center'} justify={'center'} rounded={'md'} bg={iconBg}>
        {icon}
      </Flex>
      <Stack>
        <Text fontWeight={600}>{text}</Text>
        <Text color={'gray.500'} fontSize={'md'}>{subText}</Text>
      </Stack>
    </Stack>
  )
}

export function SplitWithImage() {
  return (
    <Box>
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} gap={5}>
          <Stack spacing={4}>
            <Heading mb={8}>Abra sua conta gratuitamente</Heading>
            <Stack
              spacing={8}
              divider={<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />}
            >
              <Feature
                icon={<Icon as={FaMoneyBill} color={'white'} w={7} h={7} />}
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'No Bank Digitus seu dinheiro rende mais'}
                subText="Até 110% de rendimento no CDI e retire quando quiser."
              />
              <Feature
                icon={<Icon as={IoPhonePortraitOutline} color={'white'} w={7} h={7} />}
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'Conta digital totalmente gratuíta'}
                subText="Toda praticidade na palma da sua mão!"
              />
              <Feature
                icon={<Icon as={FaCreditCard} color={'white'} w={7} h={7} />}
                iconBg={useColorModeValue('blue.100', 'blue.900')}
                text={'Cartão de crédito sem anuidade'}
                subText="Zero taxas de serviços e de uso."
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              maxW={'md'}
              alt={'feature image'}
              src={'/svg/_25a0c4b4-a6d5-47ad-b3ba-434e1fcbba1b.jpeg'}
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
