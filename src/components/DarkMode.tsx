import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack whiteSpace={"nowrap"}>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text fontSize={{
        base:"10px",
        md: "16px",
        
      }}>Dark Mode</Text>
    </HStack>
  );
};

export default DarkMode;
