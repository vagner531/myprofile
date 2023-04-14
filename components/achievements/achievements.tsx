import * as React from 'react'
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2,
} from 'react-icons/fi'
import { FaTools } from 'react-icons/fa'
import { VStack, Heading, Box, Link, LinkProps } from '@chakra-ui/react'
import { TimelineItem } from './Timeline'
import { PageSlideFade } from 'components/shared/animations/page-transitions'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'

interface ExternalLinkProps extends LinkProps {
  url: string
  linkProps?: LinkProps
  text: string
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  )
}
const Achievements = () => {
  const linkColor = useLinkColor()

  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
        Conquistas
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
      <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2023
          </Heading>
          <Box>
            <TimelineItem icon={FaTools} skipTrail>
              Estudando{' '}
              <ExternalLink
                color={linkColor}
                url="https://angular.io/"
                text={'Angular'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
      <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2022
          </Heading>
          <Box>
            <TimelineItem icon={FiBarChart2}>          
                Desenvolvi e projetei mais de 4 projetos no Figma para clientes{' '}
                <ExternalLink
                  color={linkColor}
                  url=""
                  text={''}
                  target="_blank"
                />{' '}
              </TimelineItem>
            </Box>
          <Box>
            <TimelineItem icon={FiPackage}>
            Criei meu portfólio com{' '}
            {' '}
              <ExternalLink
                color={linkColor}
                url="https://nextjs.org/"
                text={'Next.js'}
                target="_blank"
              />,{' '}
              {' '}
              <ExternalLink
                color={linkColor}
                url="https://chakra-ui.com/"
                text={'ChakraUI '}
                target="_blank"
              />
               e {' '}
              <ExternalLink
                color={linkColor}
                url="https://www.framer.com/motion/"
                text={' Framer-motion'}
                target="_blank"
              />
              </TimelineItem>
            </Box>
          <Box>
            <TimelineItem icon={FiHome}>
                Comecei o Bootcamp Ignite{' '}
                <ExternalLink
                  color={linkColor}
                  url="https://www.rocketseat.com.br/ignite"
                  text={'Rocketseat'}
                  target="_blank"
                />{' '}
              </TimelineItem>
            </Box>
            <Box>
          <TimelineItem icon={FaTools}>
              Estudando{' '}
              <ExternalLink
                color={linkColor}
                url="https://www.typescriptlang.org"
                text={'Typescript'}
                target="_blank"
              />{' '}
              e{' '}
              <ExternalLink
                color={linkColor}
                url="https://react.dev/"
                text={'React.js'}
                target="_blank"
              />
              
            </TimelineItem>
          </Box>
        </Box>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
          
            <TimelineItem icon={FiHome} skipTrail>
            Comecei a trabalhar como Frontend Developer{' '}
              <ExternalLink
                color={linkColor} 
                url=""
                text={'Agência Weber'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
        <Box zIndex={5}>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FiHome} skipTrail>
              Concluir o curso de Análise e Desenvolvimento de Sistemas{' '}
              <ExternalLink
                color={linkColor}
                url="https://www.fiap.com.br/"
                text={'Fiap'}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  )
}

export default Achievements
