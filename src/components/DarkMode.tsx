import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const DarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack whiteSpace={"nowrap"}>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default DarkMode;
