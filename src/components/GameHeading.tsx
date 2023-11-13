import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usegetName from "../hooks/usegetName";
import useGameQueryStore from "./store";

const GameHeading = () => {
  const { data: genres } = useGenres();
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const genre = usegetName(genres, genreId);

  const { data: platforms } = usePlatforms();
  const platform = usegetName(platforms, platformId);

  const heading = `${platform || ""} ${genre || ""} Games`;

  return (
    <>
      <Heading as={"h1"} marginBottom={5}>
        {heading}
      </Heading>
    </>
  );
};

export default GameHeading;
