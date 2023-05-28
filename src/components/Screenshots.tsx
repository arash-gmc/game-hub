import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import imageCrop from "../services/imageCrop";

const Screenshots = ({ gameId }: { gameId: number }) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (error) throw error;
  if (isLoading) return null;
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2 }}
      spacing={4}
      marginTop={4}
    >
      {data?.results.map((file) => (
        <Image
          src={imageCrop(file.image)}
          key={file.id}
        />
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
