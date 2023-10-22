import { Button, Flex, HStack, Image, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack display={'Flex'}>
      <Image src={logo} boxSize={"60px"} />
      <Button justifyContent={"flex-end"} onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
    </HStack>
  );
};

export default Navbar;
