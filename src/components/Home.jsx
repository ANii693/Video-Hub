import React from 'react';
import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: ['xl','2xl','3xl'],
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py="2"
          w={'fit-content'}
          borderBottom={'8px dotted'}
          m={'auto'}
        >
          Services
        </Heading>
        <Stack
          h="full"
          p={'4'}
          alignItems="center"
          direction={['column', 'column', 'column', 'row']}
        >
          <Image
            src={img5}
            h={['40', '250', '300', '400']}
            filter={'hue-rotate(110deg)'}
          />
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={[4, 6, 8, 16]}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            quis earum blanditiis consequuntur voluptatem officia, libero
            aspernatur tempora repellat ducimus eos necessitatibus autem
            officiis eveniet dignissimos. Fugit, eos aut perferendis a qui quas
            consequuntur! Assumenda, temporibus asperiores. Officia voluptatibus
            obcaecati, quibusdam illo, ad vitae vel amet, neque dolorum officiis
            laborum nam incidunt suscipit illum autem. Dolor earum voluptas
            doloribus molestiae magni laborum, perspiciatis iste, molestias
            aspernatur voluptatum eos qui eveniet autem, debitis excepturi
            veniam tempore recusandae voluptate deleniti quos quam reprehenderit
            voluptates minima? Assumenda nobis expedita magnam a corrupti quidem
            libero odio hic aut consectetur vero, natus ullam quia dolorum in,
            similique eligendi unde adipisci
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full">
      <Image src={img1} objectFit={'cover'} h={'100vh'} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch the future
      </Heading>
    </Box>
    <Box w="full">
      <Image src={img2} objectFit={'cover'} h={'100vh'} />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full">
      <Image src={img3} objectFit={'cover'} h={'100vh'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming Console
      </Heading>
    </Box>
    <Box w="full">
      <Image src={img4} objectFit={'cover'} h={'100vh'} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        #Night life
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
