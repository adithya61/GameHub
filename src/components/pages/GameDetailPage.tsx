import { useParams } from "react-router-dom";
import useGameDetails from "../../hooks/useGameDetails";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, error, isLoading } = useGameDetails(slug);

  return (
    <>
      {error && <Text>{error.message}</Text>}

      {isLoading && <Spinner />}

      <Heading>{game?.name}</Heading>
      <Box>
        <Text>{game?.description_raw}</Text>
      </Box>
    </>
  );
};

export default GameDetailPage;
