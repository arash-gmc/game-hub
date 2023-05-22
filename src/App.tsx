import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GamesGrid from "./components/GamesGrid";
import GamesHeading from "./components/GamesHeading";
import GenresList from "./components/GenresList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortMenue from "./components/SortMenue";
import useGameQueryStore from "./services/gamQueryStore";

function App() {
  const store = useGameQueryStore();
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
      <Show above="md">
        <GridItem
          area="aside"
          paddingX={5}
        >
          <GenresList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesHeading />
        <Flex marginLeft={10}>
          <Box marginRight={2}>
            <PlatformSelector />
          </Box>
          <SortMenue />
        </Flex>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
