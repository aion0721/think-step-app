import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const Header = React.memo(() => (
  <Box bg="gray.100" py={4} px={6}>
    <Heading>Think Step APP</Heading>
  </Box>
));

export default Header;
