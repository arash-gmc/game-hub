import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  let errorMessage;
  const error = useRouteError();
  if (isRouteErrorResponse(error)) errorMessage = "This Page does not exists.";
  else errorMessage = "Something unexpected happend.";
  return (
    <>
      <Navbar />
      <Box paddingLeft={10}>
        <Heading>Ooops</Heading>
        <Text>{errorMessage}</Text>
      </Box>
    </>
  );
};

export default ErrorPage;
