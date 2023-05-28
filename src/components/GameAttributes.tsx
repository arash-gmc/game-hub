import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import DefinationItems from "./DefinationItems";
import Score from "./Score";

const GameAttributes = ({ game }: { game: Game }) => {
  return (
    <SimpleGrid
      columns={2}
      as="dl"
    >
      <DefinationItems title="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefinationItems>
      <DefinationItems title="Crirics Score">
        <Score score={game.metacritic} />
      </DefinationItems>
      <DefinationItems title="Genres">
        {game.genres?.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DefinationItems>
      <DefinationItems title="Publishers">
        {game.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefinationItems>
    </SimpleGrid>
  );
};

export default GameAttributes;
