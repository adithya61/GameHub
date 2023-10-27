import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkMode from "./DarkMode";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding={"10px"} marginBottom={5}>
      <Image src={logo} boxSize={"60px"} />
      <Text
        fontFamily={"Montserrat"}
        color="whiteAlpha.900"
        fontWeight={"600"}
        fontSize={{
          base: 20,
          lg: 30,
        }}
      >
        Game
      </Text>
      <Text
        fontFamily={"Montserrat"}
        color="#FF7000"
        fontWeight={"600"}
        fontSize={{
          base: 20,
          lg: 30,
        }}
      >
        Hub
      </Text>

      <Box width={"100%"}>
        <SearchInput />
      </Box>
      <DarkMode />
    </HStack>
  );
};

export default Navbar;
