import React from 'react';
import { Box, Heading, Image, Text, Card, VStack } from '@chakra-ui/react';

function ProductCard({ title, image, description, onClick }) {
  return (
    <Card
      as="button"
      onClick={onClick}
      p="5"
      shadow="md"
      borderWidth="1px"
      borderRadius="md"
      width="300px"
      m="2"
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      display="block"
    >
      <VStack spacing={4} align="stretch">
        <Box display="flex" justifyContent="center" alignItems="center">
        <Image src={image} alt={`Imagen de ${title}`} boxSize="150px" objectFit="cover" />
        </Box>
        <Heading fontSize="xl" textAlign="center">{title}</Heading>
        <Text textAlign="justify">{description ? description : 'Descripción no disponible'}</Text>
      </VStack>
    </Card>
  );
}

export default ProductCard;
