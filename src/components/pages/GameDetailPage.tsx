import { Grid, GridItem, Heading, Spinner, Text } from "@chakra-ui/react";
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
    <Grid
      templateAreas={{
        base: `'text' 'media'`,
        md: `"text media"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "1fr 1fr",
      }}
    >
      <GridItem area={"text"}>
        {error && <Text>{error.message}</Text>}
        {isLoading && <Spinner />}
        <Heading>{data?.name}</Heading>
        <ExpandableText description={data?.description_raw} />
        <GameInfo gameInfo={data} />
      </GridItem>
      <GridItem marginLeft={{
        md: '15px'
      }} area={"media"}>
        <Trailer slug={slug} />
        <Screenshots slug={slug} />
      </GridItem>
    </Grid>
  );
};

export default GameDetailPage;
