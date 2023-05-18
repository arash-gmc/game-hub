import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

const GamesHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();
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
