import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  description?: string;
}

const ExpandableText = ({ description }: Props) => {
  const [expanded, setExpanded] = useState(true);

  if (!description) return null;

  const len = description?.length;

  if (len && len <= 300) return <Text>{description}</Text>;

  return (
    <Box>
      <Text>
        {expanded ? description?.substring(0, 300) + " ..." : description}

        <Button
          size={"xs"}
          margin={1}
          fontWeight={"bold"}
          colorScheme="yellow"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <Text>Read More</Text> : <Text>Read Less</Text>}
        </Button>
      </Text>
    </Box>
  );
};

export default ExpandableText;
