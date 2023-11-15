import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Grid
      maxWidth={"100vw"}
      templateAreas={{
        base: `'nav' 'main'`,
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar />
      </GridItem>
      <GridItem area={"main"}>
        <Outlet />
      </GridItem>
    </Grid>
  );
}

export default App;
