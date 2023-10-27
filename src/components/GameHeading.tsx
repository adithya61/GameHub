import { Heading } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";

interface Props {
  platform: Platform | null;
  genre: Genre | null;
}

const GameHeading = ({ platform, genre }: Props) => {
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <>
      <Heading as={"h1"} marginBottom={5}>
        {heading}
      </Heading>
    </>
  );
};

export default GameHeading;
