import useGenres from "../hooks/useGenres";
import { Text, VStack } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();

  return (
    <>
      <VStack align={"flex-start"}>
        {genres.map((gen) => (
          <Text key={gen.id}>{gen.name}</Text>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
