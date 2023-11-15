import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import InfiniteScroll from "react-infinite-scroll-component";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import { Link } from "react-router-dom";

const GameGrid = () => {
  const { data, error, isLoading, fetchNextPage, hasNextPage } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return <Text color={"red.500"}>{error.message}</Text>;

  return (
    <InfiniteScroll
      dataLength={data ? data?.pages.length : 0}
      next={fetchNextPage}
      hasMore={hasNextPage}
      loader={<Spinner />}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing={5}
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {data?.pages.map((page) =>
          page.results.map((game) => (
            <GameCardContainer key={game.id}>
              <Link to={`/games/${game.slug}`}>
                <GameCard key={game.id} game={game} />
              </Link>
            </GameCardContainer>
          ))
        )}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameGrid;
