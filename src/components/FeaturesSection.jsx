import React from "react";
import { Box, SimpleGrid, Icon, Text, VStack } from "@chakra-ui/react";
import { FaCamera, FaHeart, FaUsers } from "react-icons/fa";

const Feature = ({ title, icon, children }) => {
  return (
    <VStack spacing={3}>
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Text fontWeight="bold" fontSize="xl">
        {title}
      </Text>
      <Text textAlign="center">{children}</Text>
    </VStack>
  );
};

const FeaturesSection = () => {
  return (
    <Box p={10} id="features">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature title="Capture Moments" icon={FaCamera}>
          Share your favorite memories with friends.
        </Feature>
        <Feature title="Spread Love" icon={FaHeart}>
          React to stories with hearts and likes.
        </Feature>
        <Feature title="Grow Community" icon={FaUsers}>
          Find and connect with like-minded individuals.
        </Feature>
      </SimpleGrid>
    </Box>
  );
};

export default FeaturesSection;
