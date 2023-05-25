import { Box, Heading, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

const ShowList = ({ title, children }: Props) => {
  return (
    <Box mt={10}>
      <Heading
        fontSize="lg"
        color="gray.500"
        as="dt"
        marginBottom={2}
      >
        {title}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default ShowList;
