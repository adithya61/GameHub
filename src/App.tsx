import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav' 'main'`,
        lg: ` "nav nav" "aside main" `,
      }}
    >
      <GridItem h={"60px"} area={"nav"} bg={"green.400"}>
        NavBar
      </GridItem>
      <Show above="lg">
        <GridItem h={"100vh"} area={"aside"} bg={"yellow.300"}>
          Aside
        </GridItem>
      </Show>
      <GridItem  area={"main"} bg={"orange.300"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
