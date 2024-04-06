import React from 'react';
import { Box, Heading } from '@chakra-ui/react';

function About() {
  return (
    <Box
      backgroundImage={
        "https://i.pinimg.com/originals/19/6c/8e/196c8e1b5682ea37d9c42ca85fec4b14.jpg"
      }
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      w={"100%"}
      h={"700"}
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='4xl'
        fontWeight='bold'
      >
        Este es el About o la Pagina sobre informacion
      </Heading>
    </Box>
  );
}

export default About;
