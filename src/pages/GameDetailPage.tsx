import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import DefinationItems from "../components/DefinationItems";
import GameAttributes from "../components/GameAttributes";
import Score from "../components/Score";
import TextExpanse from "../components/TextExpanse";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box mx={10}>
      <Heading>{game.name}</Heading>
      <TextExpanse>{game.description_raw}</TextExpanse>
      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetailPage;
