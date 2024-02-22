import React from "react";
import { Flex, Heading, Image, Text, VStack, Button } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Flex align="center" justify="center" minHeight="100vh" p={4} id="home">
      <VStack w="full" align="start" spacing={6} p={{ base: 4, md: 10 }}>
        <Heading as="h1" size="4xl" fontWeight="bold">
          Discover. Connect. Enjoy.
        </Heading>
        <Text fontSize="2xl" color="gray.600">
          Join the ultimate social media experience.
        </Text>
        <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
      <Image borderRadius="full" boxSize="500px" src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBsYXRmb3JtfGVufDB8fHx8MTcwODYyNDQ1NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Social Media Experience" objectFit="cover" />
    </Flex>
  );
};

export default HeroSection;
