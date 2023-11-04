import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import usegetName from "../hooks/usegetName";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genre = usegetName(genres, gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = usegetName(platforms, gameQuery.platformId);

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
