import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../../hooks/useGameDetails";
import ExpandableText from "../ExpandableText";
import GameInfo from "../GameInfo";
import Screenshots from "../ScreenshotsPage";
import Trailer from "../Trailer";

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
      <GameInfo gameInfo={data} />
      <Trailer slug={slug} />

      <Screenshots slug={slug} />
    </>
  );
};

export default GameDetailPage;
