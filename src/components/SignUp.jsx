import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { Link } from 'react-router-dom';
  
  const SignUp = () => {
    return (
      <Container h={'110vh'} maxW={'container.xl'} p={16}>
        <form>
          <VStack
            alignItems={'stretch'}
            spacing={8}
            w={['full', 96]}
            m={'auto'}
            my={16}
          >
            <Heading display={'flex'} justifyContent={'center'}>VIDEO HUB</Heading>
            <Avatar alignSelf={'center'} boxSize={32}/>
            <Input
              placeholder="Name"
              type="email"
              focusBorderColor="purple.500"
              required
            />
            <Input
              placeholder="Email"
              type="email"
              focusBorderColor="purple.500"
              required
            />
            <Input
              placeholder={'Password'}
              type={'password'}
              required
              focusBorderColor={'purple.500'}
            />
           
            <Button colorScheme="purple" type="submit">
              Sign Up
            </Button>
            <Text textAlign={'right'}>
            Already Signed Up?{' '}
              <Button variant='link' colorScheme='purple'>
                  <Link to='/login' >Log In</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
export default SignUp