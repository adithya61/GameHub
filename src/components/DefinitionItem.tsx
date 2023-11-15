import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box>
      <Text fontWeight={"bold"} color={"gray.500"}>
        {term}
      </Text>
      {children}
    </Box>
  );
};

export default DefinitionItem;
