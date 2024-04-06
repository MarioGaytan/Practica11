import { Box, Flex, Text, Button, Stack, HStack, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Box>
      <Flex bg={"blue.900"} color={"white"} py={2} px={4} align={"center"}>
        <Flex flex={1} justify={"start"}>
          {/* Para colocar un logo*/}
          <Text textAlign={{ base: "center", md: "left" }} color={"white"}>
          <Image
        src="https://i.pinimg.com/originals/64/57/98/645798a057a6f7c47f9421f118ca0f30.png"
        borderRadius='full'
        boxSize='25px'
        ></Image>
          </Text>
          {/* Para los NavLinks*/}
          <Flex display={"flex"} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <HStack justify={"flex-end"} spacing={6}>
          <Button
            as={NavLink}
            to={"/signin"}
            fontSize={"sm"}
            color={"white"}
            fontWeight={400}
            variant={"link"}
          >
            Sign In
          </Button>
          <Button
            as={NavLink}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"blue.500"}
            to={"/signup"}
            _hover={{
              bg: "blue.200",
            }}
          >
            Sign Up
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <NavLink
            to={navItem.href ?? "#"}
            style={({ isActive }) =>
              isActive
                ? {
                    padding: "8px",
                    fontSize: "sm",
                    fontWeight: 800,
                    color: "white",
                  }
                : {
                    padding: "8px",
                    fontSize: "sm",
                    fontWeight: 200,
                    color: "white",
                  }
            }
          >
            {navItem.label}
          </NavLink>
        </Box>
      ))}
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Acerca De",
    href: "/about",
  },
  {
    label: "Productos",
    href: "/products",
  },
];
