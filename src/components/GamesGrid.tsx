import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GamesGrid = ({ gameQuery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6];
  if (error) return <Text>{error.message}</Text>;
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, lg: 2, xl: 3 }}
        spacing={10}
        padding={10}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {!isLoading &&
          data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCard
                  key={game.id}
                  game={game}
                />
              ))}
            </React.Fragment>
          ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginLeft={30}
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      )}
    </>
  );
};

export default GamesGrid;
