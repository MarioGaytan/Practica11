import { Box, Button, Input, Card, Image, HStack, VStack, Heading } from '@chakra-ui/react'
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();
  return (
    <>
    <Box
      backgroundImage= {
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
    
    <HStack bgGradient='linear(to-r, green.200, pink.500)' p={"30px"} borderRadius={"30px"}>
        <Image
        src="https://i.pinimg.com/originals/64/57/98/645798a057a6f7c47f9421f118ca0f30.png"
        borderRadius='full'
        boxSize='280px'
        ></Image>
        <Card 
        bg="#ffffff" 
        p={20}
        borderRadius={"30px"}
        flexGrow="1"
        minWidth={"400px"}
        boxShadow={"2x1"}
        >
          
          <VStack spacing={5}>
          <Heading
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize='3xl'
          fontWeight='bold'
          >
            Inciar Sesion
          </Heading>
          <Input placeholder="Usuario" ></Input>
          <Input placeholder="Contraseña" ></Input>
          <Button bg="#450068" color="#ffffff" onClick={() => navigate("/")}>
            Iniciar sesión
          </Button>
          <Button variant="link" onClick={() => navigate("/signup")}>
            Registrarse
          </Button>
          </VStack>
        </Card>
      </HStack>
    </Box>
    </>
  );
}

export default SignIn;
