import type { NextPage } from 'next'
import {
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Container,
  Heading,
  chakra,
  AccordionProps,
  useColorModeValue,
  Text,
  Flex,
  HStack,
  Icon
} from '@chakra-ui/react'
import { MdBolt } from 'react-icons/md'
import { GoChevronRight } from 'react-icons/go'

const faqDate = [
  {
    id: 1,
    title: 'O Atendimento é 24 horas por chat e ligação?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 2,
    title: 'Como abro uma conta no Digitus?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    id: 3,
    title: 'Consigo trazer meu salário direto pra cá?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
]

const Accordion: NextPage<AccordionProps> = () => {
  const textColor = useColorModeValue('#18216d', 'white')
  return (
    <Container maxWidth="74ch" mb="22px" mt={6}>
      <Flex flexDir={'column'} justify={'center'} align={'center'} marginBottom={5}>
        <HStack
          p={3}
          rounded="full"
          fontSize="sm"
          w="max-content"
          bg={useColorModeValue('gray.300', 'gray.700')}
          mb={2}
        >
          <Box
            py={1}
            px={2}
            lineHeight={1}
            rounded="full"
            color="white"
            bgGradient="linear(to-l, #0ea5e9,#2563eb)"
          >
           #AJUDA
          </Box>
          <HStack spacing={1} alignItems="center" justifyContent="center">
            <Text lineHeight={1}>veja algumas perguntas</Text>
            <Icon as={GoChevronRight} w={4} h={4} />
          </HStack>
        </HStack>
        <Heading as="h2">Ainda resta dúvidas?</Heading>
        <Text>Confira algumas perguntas frequentes abaixo</Text>
      </Flex>
      <ChakraAccordion allowMultiple>
        {faqDate.map((faq) => (
          <AccordionItem key={faq.id} borderTopWidth={0} borderBottomWidth={0} marginBottom="3px">
            <h2>
              <AccordionButton boxShadow="none" padding="0.8em 1.2em 0.8em 1.2em">
                <Box flex="1" textAlign="left">
                  <strong>
                    <span style={{ color: '#737380' }}>0</span>
                    <span style={{ color: '#04D361' }}>{faq.id}.</span>
                  </strong>{' '}
                  {faq.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Text fontSize="md" color={textColor}>
                {faq.description}
              </Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </ChakraAccordion>
    </Container>
  )
}
export default Accordion
