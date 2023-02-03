import Home from 'components/home-page/home';
import PageLayout from 'components/layouts/pageLayout';
import { Box, Flex, Text, Heading, useColorModeValue } from '@chakra-ui/react';
import { useLinkColor } from 'components/theme'

const Index: React.FC = () => {
  const linkColor = useLinkColor()
  const bgColor = useColorModeValue('gray.50', '#202024');

  return (
    <PageLayout title="Vagner Santos - Front End Developer">
      <Home posts={[]} />
      <Flex flexWrap="wrap" justifyContent="center" mb="-1">
        <Box p={5} bg={bgColor} rounded="md" borderWidth="1px" maxW={['100%', '45%']} m={2}>
          <Heading as="h3" size="4" pb="2" color={linkColor}>
            Front-end
          </Heading>
          <Text fontSize="sm">
            Atualmente estou trabalhando em projetos utilizando as skills React, NextJs, Styled
            Components JavaScript, TypeScript...
          </Text>
        </Box>
        <Box p={5} bg={bgColor} rounded="md" borderWidth="1px" maxW={['100%', '45%']} m={2}>
          <Heading as="h3" size="4" pb="2" color={linkColor}>
            UI/UX Design
          </Heading>
          <Text fontSize="sm">
            Sou um entusiasta de código e design criativo para assim criar uma melhor experiência do
            usuário na web.
          </Text>
        </Box>
        <Box p={5} bg={bgColor} rounded="md" borderWidth="1px" maxW={['100%', '45%']} m={2}>
          <Heading as="h3" size="4" pb="2" color={linkColor}>
            WordPress
          </Heading>
          <Text fontSize="sm">
            Experiência em desenvolvimento de sites e Landing pages com foco em performance e
            usabilidade..
          </Text>
        </Box>
        <Box p={5} bg={bgColor} rounded="md" borderWidth="1px" maxW={['100%', '45%']} m={2}>
          <Heading as="h3" size="4" pb="2" color={linkColor}>
            Freelance
          </Heading>
          <Text fontSize="sm">
            "Iniciei minha jornada na área realizando projetos freelancer para amigos e empresas, o
            que me proporcionou valiosa experiência."
          </Text>
        </Box>
      </Flex>
    </PageLayout>
  );
};

export default Index;
