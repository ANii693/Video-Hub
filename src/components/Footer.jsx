import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box backgroundColor={'blackAlpha.900'} minH={40} p={16} color={'white'}>
      <Stack direction={['column','column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={4} my={[10,10,0]}>
          <Heading
            size={'md'}
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Follow Me for More Updates
          </Heading>
          <HStack borderBottom={'1px solid white'} py={2}>
            <Input
              placeholder="Enter Email Here"
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor={'none'}
            />
            <Button
              p={0}
              colorScheme="purple"
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>
        <VStack
          w={'full'}
          borderLeft={['none','none', '1px solid white']}
          borderRight={['none', 'none','1px solid white']}
          justifyContent={'center'}
          my={[10,10,0]}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
            Video Hub
          </Heading>
          <Text>All rights received</Text>
        </VStack>
        <VStack w={'full'}  justifyContent={'center'} my={[10,10,0]}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media
          </Heading>
          <Button variant={'link'} colorScheme="white">
            <a href="https://github.com/ANii693" target="blank">
              Github
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a
              href="https://www.linkedin.com/in/anirudh-rai-072732220/"
              target="blank"
            >
              Linkedln
            </a>
          </Button>
          <Button variant={'link'} colorScheme="white">
            <a href="https://www.instagram.com/anii_akhil/" target="blank">
              Instagram
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
