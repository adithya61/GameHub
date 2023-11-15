import { Box, Heading } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box padding={10}>
      <Heading>OOps</Heading>
      {isRouteErrorResponse(error) ? "invalid route" : "unexpected error"}
    </Box>
  );
};

export default ErrorPage;
