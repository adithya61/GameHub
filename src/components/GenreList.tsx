import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedUrl from "../services/image-url";
import useGameQueryStore from "./store";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  const selectedGenre = useGameQueryStore((s) => s.gameQuery.genreId);
  const onSelectGenre = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                src={getCroppedUrl(genre.image_background)}
              />
              <Button
                fontWeight={genre.id == selectedGenre ? "800" : "normal"}
                color={genre.id == selectedGenre ? "gray.600" : "gray.500"}
                onClick={() => onSelectGenre(genre.id)}
                fontSize={"lg"}
                variant={"link"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
