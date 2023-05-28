import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
  children: string;
}

const TextExpanse = ({ children }: Props) => {
  const [expaned, setExpaned] = useState(false);
  const expanseLength = 400;
  if (!children) return null;
  if (children.length < expanseLength) return <Text>{children}</Text>;

  return (
    <Text>
      {expaned ? children : children.substring(0, expanseLength) + "..."}
      <Button
        onClick={() => setExpaned(!expaned)}
        size="sm"
        colorScheme="green"
        marginLeft={2}
      >
        {expaned ? "show less" : "show more"}
      </Button>
    </Text>
  );
};

export default TextExpanse;
