import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../GameGrid";
import GameHeading from "../GameHeading";
import GenreList from "../GenreList";
import PlatformSelector from "../PlatformSelector";
import SortSelector from "../SortSelector";

const GamePage = () => {
  return (
    <Grid
      maxWidth={"100vw"}
      templateAreas={{
        base: `'main'`,
        lg: `"aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} paddingX={3}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box
          padding={{
            base: 1,
          }}
        >
          <GameHeading />
          <HStack marginBottom={5} spacing={6}>
            <PlatformSelector />
            <SortSelector />
          </HStack>

          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default GamePage;
