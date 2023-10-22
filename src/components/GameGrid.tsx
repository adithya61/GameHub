import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Games {
  id: number;
  name: string;
}

interface fetchGamesResponse {
  count: number;
  results: Games[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((games) => (
          <li key={games.id}>{games.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
