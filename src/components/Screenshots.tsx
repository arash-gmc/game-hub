import { Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import imageCrop from "../services/imageCrop";

const Screenshots = ({ gameId }: { gameId: number }) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  //if (error) throw error;
  //if (isLoading) return null;
  //console.log(data);
  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, xl: 3 }}
      spacing={10}
      marginTop={10}
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
