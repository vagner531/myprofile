import { useEffect, useState } from 'react'
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { MotionBox, MotionFlex } from 'components/shared/animations/motion'
import Header from 'components/shared/header'
import NextLink from 'next/link'
import { useLinkColor } from 'components/theme'
import PopularArticles from './PopularArticles'
import { BlogPostProps } from 'interfaces/interface'
import { newContent } from 'data/data'
import DownloadButton from 'pages/DownloadButton';

const ANIMATION_DURATION = 0.5
const ORANGE = '#ff9400'
const emojis = ['👋', '👍', '🖐']

const Home: React.FC<BlogPostProps> = (props) => {
  const { posts } = props
  const linkColor = useLinkColor()
  const [showEmogi, setShowEmoji] = useState(false)
  const [emojiCounter, setEmojiCounter] = useState(-1)

  useEffect(() => {
    const interval = setInterval(() => {
      if (emojiCounter >= 3) setEmojiCounter(0)
    }, 500)
    return () => clearInterval(interval)
  }, [emojiCounter])

  return (
    <Flex direction="column" align="center">
      <Flex direction={['column', 'column', 'row']}>
        <MotionBox
          opacity="0"
          initial={{
            translateX: -150,
            opacity: 0,
          }}
          animate={{
            translateX: 0,
            opacity: 1,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
          m="auto"
          mb={[16, 16, 'auto']}
        >
          <MotionBox whileHover={{ scale: 1.2 }} rounded="full" shadow="lg">
            <Avatar
              size={'2xl'}
              showBorder={true}
              borderColor={linkColor}
              src={'https://github.com/vagner531.png'}
            />
          </MotionBox>
          <DownloadButton />
        </MotionBox>
        <MotionFlex
          position="relative"
          ml={['auto', 'auto', 16]}
          m={['auto', 'initial']}
          w={['90%', '85%', '80%']}
          maxW="800px"
          opacity="0"
          justify="center"
          direction="column"
          initial={{
            opacity: 0,
            translateX: 150,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            transition: {
              duration: ANIMATION_DURATION,
            },
          }}
        >
          <Box position="relative">
            <Box
              position="absolute"
              width="full"
              fontSize="2xl"
              textAlign="center"
            >
              {emojis.map((item, index) => {
                return (
                  <MotionBox
                    key={index}
                    position="absolute"
                    right="80%"
                    animate={
                      showEmogi && emojiCounter === index ? 'show' : 'hide'
                    }
                    variants={{
                      hide: { translateY: -80, opacity: 0 },
                      show: {
                        translateY: [0, -40, -60],
                        opacity: [0, 1, 0],
                      },
                    }}
                    initial="hide"
                  >
                    {item}
                  </MotionBox>
                )
              })}
            </Box>
            <MotionBox whileHover={{ translateY: -5 }} width="max-content">
              <Header
                underlineColor={ORANGE}
                emoji="👋"
                mt={0}
                cursor="pointer"
                width="max-content"
                onClick={() => {
                  setEmojiCounter((prevCounter) => prevCounter + 1)
                  setShowEmoji(true)
                }}
              >
                Hey!
              </Header>
            </MotionBox>
          </Box>
          <Box as="h2" fontSize="1xl" fontWeight="400" textAlign="left">
          Meu nome é{' '}
            <Box as="strong" fontWeight="600">
              Vagner
            </Box>{' '}
            e sou <br />{' '}
            <Box as="span" whiteSpace="nowrap">
            desenvolvedor Front End. <br />
            Explorando o mundo da Web 3.0.
            </Box>{' '}
          </Box>
          <Box as="h2" fontSize="1xl" fontWeight="400" mt={5} textAlign="left">
          Este é meu portfolio, onde posto meus projetos, trabalhos e compartilho o que aprendi. 😊
          </Box>
        </MotionFlex>
      </Flex>

      <MotionBox
        w="100%"
        opacity="0"
        initial={{
          translateY: 80,
        }}
        animate={{
          translateY: 0,
          opacity: 1,
          transition: {
            delay: ANIMATION_DURATION - 0.1,
            duration: ANIMATION_DURATION,
          },
        }}
        zIndex={1}
      >
        <Box mt={10}>
          <ContentBox linkColor={linkColor} />
          <PopularArticles posts={posts} />
        </Box>
      </MotionBox>
    </Flex>
  )
}

const ContentBox = ({ linkColor }) => {
  return (
    <Stack
      mb={10}
      mx={[0, 0, 10]}
      padding={4}
      align="start"
      borderLeft="4px solid"
      borderColor={linkColor}
      color={'whatsapp'}
      _hover={{ shadow: 'lg' }}
      backgroundColor={useColorModeValue('gray.100', '#202024')}
      rounded="sm"
      fontSize="md"
    >
      <Text
        textAlign="center"
        color="#53c8c4"
        fontWeight="bold"
        fontSize={['md', 'lg']}
        variant="gradient"
        fromcolor="blue.400"
        tocolor="red.500"
      >
        Sobre:
      </Text>
      <UnorderedList textAlign="left" paddingLeft={5} m={0}>
        {newContent.map((content, index) => (
          <ListItem key={index}>
            <NextLink href={content.link} passHref>
              <Link color={linkColor}>
                {content.text}
                {content.showNewTag && (
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                )}
              </Link>
            </NextLink>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  )
}

export default Home
