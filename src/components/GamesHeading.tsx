import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";
import useGameQueryStore from "../services/gamQueryStore";

const GamesHeading = () => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const genreName = genres.results.find(
    (g) => g.id === gameQuery.genreId
  )?.name;
  const platformName = platforms.results.find(
    (p) => p.id === gameQuery.platformId
  )?.name;
  let header = `${platformName || ""} ${genreName || ""} Games`;
  return (
    <Heading
      as={"h1"}
      marginLeft={10}
      marginBottom={5}
      fontSize="5xl"
    >
      {header}
    </Heading>
  );
};

export default GamesHeading;
