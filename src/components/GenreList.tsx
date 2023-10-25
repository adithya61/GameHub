import useData from "../hooks/useData";
import { Genre } from "../hooks/useGenres";
import { Text, VStack } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");

  return (
    <>
      <VStack align={"flex-start"}>
        {data.map((gen) => (
          <Text key={gen.id}>{gen.name}</Text>
        ))}
      </VStack>
    </>
  );
};

export default GenreList;
