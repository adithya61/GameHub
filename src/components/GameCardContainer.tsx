import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.20s ease-in"
      }}
      cursor={"pointer"}
      overflow={"hidden"}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
