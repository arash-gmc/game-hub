import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const Score = ({ score }: Props) => {
  const color =
    score > 80 ? "green" : score > 60 ? "yellow" : score < 40 ? "red" : "";
  return (
    <Badge
      fontSize="16px"
      paddingX={2}
      borderRadius={2}
      colorScheme={color}
    >
      {score}
    </Badge>
  );
};

export default Score;
