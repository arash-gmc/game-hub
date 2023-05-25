import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import { useParams } from "react-router-dom";
import TextExpanse from "../components/TextExpanse";
import useGame from "../hooks/useGame";

const GameDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <Box m={20}>
      <Heading>{game.name}</Heading>
      <TextExpanse>{game.description_raw}</TextExpanse>
    </Box>
  );
};

export default GameDetailPage;
