import React from "react";
import { Box, Button, Heading, Stack, useColorModeValue } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  const bg = useColorModeValue("blue.600", "blue.800");

  return (
    <Box w="full" p={10} bg={bg} color="white" textAlign="center" id="join">
      <Stack spacing={4}>
        <Heading as="h2" size="xl">
          Ready to dive in?
        </Heading>
        <Button rightIcon={<FaArrowRight />} colorScheme="blue" variant="outline" size="lg">
          Join Now
        </Button>
      </Stack>
    </Box>
  );
};

export default CTASection;
