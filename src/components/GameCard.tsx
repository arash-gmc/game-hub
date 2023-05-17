import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import imageCrop from "../services/imageCrop";
import Emoji from "./Emoji";
import GameCardContainer from "./GameCardContainer";
import PlatformIcons from "./PlatformIcons";
import Score from "./Score";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={imageCrop(game.background_image)} />
        <CardBody>
          <HStack justifyContent="space-between">
            <PlatformIcons platforms={game.parent_platforms} />
            <Score score={game.metacritic} />
          </HStack>
          <HStack>
            <Heading
              fontSize="2xl"
              marginTop={5}
            >
              {game.name}
            </Heading>
            <Emoji rate={game.rating_top} />
          </HStack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
