import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  console.log("gamess", data);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      {error ? (
        <Text color={"red.500"}>{error}</Text>
      ) : (
        <SimpleGrid
          columns={{
            sm: 1,
            md: 2,
            lg: 3,
            xl: 4,
          }}
          spacing={10}
          padding={10}
        >
          {isLoading &&
            Skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game} />
            </GameCardContainer>
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
