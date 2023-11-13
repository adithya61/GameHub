import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  console.log("app render");

  return (
    <Grid
      maxWidth={"100vw"}
      templateAreas={{
        base: `'nav' 'main'`,
        lg: ` "nav nav" "aside main" `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={3}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box
          padding={{
            base: 1,
            lg: 1,
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
}

export default App;
