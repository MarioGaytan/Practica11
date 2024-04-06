import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'crypto-js/md5';
import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ProductCard from '../components/ProductCard';
import { useNavigate } from 'react-router-dom';

function Products() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const publicKey = '95cdd2d5882f4fd368b8bfe941f4e304';
    const privateKey = 'add998530928d3554b3900f04dfe406eb19e9052';
    const timestamp = new Date().getTime();
    const hash = md5(timestamp + privateKey + publicKey).toString();
    
    axios.get(`https://gateway.marvel.com:443/v1/public/series`, {
      params: {
        ts: timestamp,
        apikey: publicKey,
        hash: hash,
      }
    })
    .then(response => {
      setData(response.data.data.results);
    })
    .catch(e => {
      console.error(e);
    });
  }, []);

  return (
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
      <Heading
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
        fontSize='4xl'
        fontWeight='bold'
        mb="4"
      >
        Series de Marvel
      </Heading>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="20px">
        {data.map((item) => (
          <ProductCard
            key={item.id}
            title={item.title}
            image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            description={item.description}
            onClick={() => navigate(`/products/${item.id}`)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Products;
