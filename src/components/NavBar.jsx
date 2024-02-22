import React from "react";
import { Box, Flex, Heading, HStack, Link } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaUserFriends } from "react-icons/fa";

const NavBar = () => {
  return (
    <Box as="nav" w="full" bg="blue.800" color="white" p={4}>
      <Flex justify="space-between" align="center" maxWidth="container.xl" margin="0 auto">
        <Heading as="h1" size="lg">
          Verbatim
        </Heading>
        <HStack as="ul" listStyleType="none" spacing={4}>
          <Link as="li" href="#home" display="flex" alignItems="center">
            <FaHome /> Home
          </Link>
          <Link as="li" href="#features" display="flex" alignItems="center">
            <FaInfoCircle /> Features
          </Link>
          <Link as="li" href="#join" display="flex" alignItems="center">
            <FaUserFriends /> Join Now
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavBar;
