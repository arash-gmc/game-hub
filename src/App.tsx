import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GamesGrid from "./components/GamesGrid";
import GamesHeading from "./components/GamesHeading";
import GenresList from "./components/GenresList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortMenue from "./components/SortMenue";
import { Genres } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";

export interface GameQuery {
  genreId: number | null;
  platformId: number | null;
  sortBy: string | null;
  search: string | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
        <Navbar
          onSearch={(input) => setGameQuery({ ...gameQuery, search: input })}
        />
      </GridItem>
      <Show above="md">
        <GridItem
          area="aside"
          paddingX={5}
        >
          <GenresList
            onSelectGenre={(genreId) => setGameQuery({ ...gameQuery, genreId })}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GamesHeading gameQuery={gameQuery} />
        <Flex marginLeft={10}>
          <Box marginRight={2}>
            <PlatformSelector
              onPlatformSelect={(platformId) =>
                setGameQuery({ ...gameQuery, platformId })
              }
              selectedPlatformId={gameQuery.platformId}
            />
          </Box>
          <SortMenue
            onSortChange={(sortBy) => setGameQuery({ ...gameQuery, sortBy })}
            sortedBy={gameQuery.sortBy}
          />
        </Flex>
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
