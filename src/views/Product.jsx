import React from 'react';
import { useParams } from "react-router-dom";
import { Box, Text, Heading, VStack } from '@chakra-ui/react';

function Product() {
  const { id } = useParams();
  
  return (
    <Box
      backgroundImage={
        "https://i.pinimg.com/originals/19/6c/8e/196c8e1b5682ea37d9c42ca85fec4b14.jpg"
      }
      backgroundSize="cover"
      backgroundPosition="center"
      w={"100%"}
      h={"700"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={4} bg="whiteAlpha.800" p={5} borderRadius="lg" boxShadow="lg">
        <Heading as="h1" size="xl" textAlign="center">
          Producto
        </Heading>
        <Text fontSize="md">
          ID: {id}
        </Text>
      </VStack>
    </Box>
  );
}

export default Product;
