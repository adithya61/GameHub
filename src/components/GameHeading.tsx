import { Heading } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";

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
