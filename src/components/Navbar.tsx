import { Box, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import DarkMode from "./DarkMode";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"10px"} marginBottom={5}>
      <Image
        src={logo}
        boxSize={{
          base: "35px",
          md: "60px",
        }}
      />
      <Text
        fontFamily={"Montserrat"}
        color="gray.500"
        fontWeight={"600"}
        fontSize={{
          base: 15,
          md: 30,
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
          base: 15,
          md: 30,
          lg: 30,
        }}
      >
        Hub
      </Text>

      <Box width={"100%"}>
        <SearchInput onSearch={onSearch} />
      </Box>
      <DarkMode />
    </HStack>
  );
};

export default Navbar;
