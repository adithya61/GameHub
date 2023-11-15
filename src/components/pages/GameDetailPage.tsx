import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../ExpandableText";
import useGameDetails from "../../hooks/useGameDetails";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data, error, isLoading } = useGameDetails(slug!);

  return (
    <>
      {error && <Text>{error.message}</Text>}

      {isLoading && <Spinner />}

      <Heading>{data?.name}</Heading>
      <Box>
        <ExpandableText description={data?.description_raw} />
      </Box>
    </>
  );
};

export default GameDetailPage;
