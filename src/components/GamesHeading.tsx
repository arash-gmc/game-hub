import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

const GamesHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  let header = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
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
