import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'crypto-js/md5';
import { useParams } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const publicKey = '95cdd2d5882f4fd368b8bfe941f4e304';
    const privateKey = 'add998530928d3554b3900f04dfe406eb19e9052';
    const timestamp = new Date().getTime();
    const hash = md5(timestamp + privateKey + publicKey).toString();

    axios.get(`https://gateway.marvel.com/v1/public/series/${id}`, {
      params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash,
      }
    })
    .then(response => {
      setProduct(response.data.data.results[0]);
    })
    .catch(error => {
      console.error("Error al obtener los datos del producto:", error);
    });
  }, [id]);

  if (!product) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="700px"
      >
        Error al cargar producto...
      </Box>
    );
  }

  return (
    <>
      <Box
      backgroundImage="https://i.pinimg.com/originals/19/6c/8e/196c8e1b5682ea37d9c42ca85fec4b14.jpg"
      backgroundSize="cover"
      backgroundPosition="center"
      display="flex"
      flexDirection="column"
      alignItems="center"
      w="100%"
      minH="700px"
      p={4}
      >
        <Text fontWeight="bold" color="black">
        Producto num {id}
        </Text>
        {
          product?(<ProductCard
          title={product.title}
          image={`${product.thumbnail.path}.${product.thumbnail.extension}`}
          description={product.description}
        />):
        <Text>Esperando Producto</Text>
        }
        
        
      </Box>
    </>
    
  );
}

export default Product;
