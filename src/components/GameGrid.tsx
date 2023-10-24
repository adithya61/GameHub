import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error ? (
        <Text color={"red.500"}>{error}</Text>
      ) : (
        <ul>
          {games.map((games) => (
            <li key={games.id}>{games.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default GameGrid;
