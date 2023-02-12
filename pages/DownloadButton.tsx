import { Button, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export default function DownloadButton(): JSX.Element  {
  const bgColor = useColorModeValue('gray.00', '#202024');

  return(
    <Button 
      as="a"
      href="https://drive.google.com/file/d/1LNizFu4BSmluy1PwWiCU-_rnOaG2jafq/view?usp=sharing"
      download 
      target="_blank"
      bg={bgColor} 
      mt="5"
      borderWidth="1px"
      color="white"
    >
      <Flex align="center">
        Download CV
      </Flex>
    </Button>
  );
}
