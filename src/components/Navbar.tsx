import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"} marginBottom={5}>
      <HStack>
        <Image src={logo} boxSize={"60px"} />
        <Text
          fontFamily={"Montserrat"}
          color="whiteAlpha.900"
          fontWeight={"600"}
          fontSize={30}
        >
          Game
        </Text>
        <Text
          fontFamily={"Montserrat"}
          color="#FF7000"
          fontWeight={"600"}
          fontSize={30}
        >
          Hub
        </Text>
      </HStack>
      <DarkMode />
    </HStack>
  );
};

export default Navbar;
