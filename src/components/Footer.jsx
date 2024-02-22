import React from "react";
import { Box, Center, Stack, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="brand.900" color="accent.500" py={4}>
      <Center>
        <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
          <Text>&copy; {new Date().getFullYear()} Verbatim</Text>
          <Text>Privacy Policy</Text>
          <Text>Terms of Service</Text>
          <Text>Contact Us</Text>
        </Stack>
      </Center>
    </Box>
  );
};

export default Footer;
