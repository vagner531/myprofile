import { Button, Flex, useColorModeValue } from '@chakra-ui/react';

export function DownloadButton(): JSX.Element  {
  const bgColor = useColorModeValue('gray.00', '#202024');

  return(
    <Button 
      as="a"
      href="https://drive.google.com/file/d/1m5toXW5vrZ2ykFLfQ-lSIeX7l8kCwbcV/view?usp=sharing"
      download target="_blank"
      variantColor="teal"
      bg={bgColor} mt="5"
      borderWidth="1px"
      color="white"
      mt="5"
    >
      <Flex align="center">
        Download CV
      </Flex>
    </Button>
  );
}