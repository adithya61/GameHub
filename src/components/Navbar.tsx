import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"} marginBottom={5}>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Text
          fontFamily={"mono"}
          color="whiteAlpha.900"
          fontWeight={"800"}
          fontSize={40}
        >
          Game
        </Text>
        <Text
          fontFamily={"serif"}
          color="orange.500"
          fontWeight={"800"}
          fontSize={40}
          backgroundColor={""}
        >
          Hub
        </Text>
      </HStack>
      <DarkMode />
    </HStack>
  );
};

export default Navbar;
