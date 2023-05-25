import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import GamesGrid from "./components/GamesGrid";
import GamesHeading from "./components/GamesHeading";
import GenresList from "./components/GenresList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortMenue from "./components/SortMenue";
import useGameQueryStore from "./services/gamQueryStore";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "180px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Outlet />
    </Grid>
  );
}

export default App;
