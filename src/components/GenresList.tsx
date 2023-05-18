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
import imageCrop from "../services/imageCrop";

interface Props {
  onSelectGenre: (genreId: number | null) => void;
  selectedGenreId: number | null;
}

const GenresList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenres();

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
            onClick={() => onSelectGenre(null)}
            fontWeight={selectedGenreId === null ? "bold" : "normal"}
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
                onClick={() => onSelectGenre(genre.id)}
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
