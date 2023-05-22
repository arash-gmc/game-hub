import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genres } from "../hooks/useGenres";
import useGameQueryStore from "../services/gamQueryStore";
import imageCrop from "../services/imageCrop";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenre);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading
        fontSize="2xl"
        marginBottom={5}
      >
        Genres
      </Heading>
      <List>
        <ListItem>
          <Button
            paddingBottom={3}
            fontSize="xl"
            variant="link"
            onClick={() => setSelectedGenreId()}
            fontWeight={!selectedGenreId ? "bold" : "normal"}
          >
            All Genres
          </Button>
        </ListItem>
        {data?.results.map((genre) => (
          <ListItem key={genre.id}>
            <HStack paddingY={1}>
              <Image
                src={imageCrop(genre.image_background)}
                boxSize="36px"
                objectFit="cover"
              />
              <Button
                fontSize="lg"
                variant="link"
                whiteSpace="normal"
                textAlign="left"
                onClick={() => setSelectedGenreId(genre.id)}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
