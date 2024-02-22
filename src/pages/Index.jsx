import { Box, Button, Center, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="center" minHeight="100vh" p={4}>
        {/* Left Content */}
        <VStack w={{ base: "full", md: "50%" }} align="start" spacing={6} p={{ base: 4, md: 10 }}>
          <Heading as="h1" size="2xl" fontWeight="bold">
            Verbatim
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Connect with friends and the world around you.
          </Text>
          <Button rightIcon={<FaArrowRight />} colorScheme="blue" size="lg" mt={3}>
            Join Now
          </Button>
          <Flex gap={6}>
            <FaFacebook color="#3b5998" size="2em" />
            <FaInstagram color="#e1306c" size="2em" />
            <FaTwitter color="#1da1f2" size="2em" />
          </Flex>
        </VStack>

        {/* Right Content */}
        <Box w={{ base: "full", md: "50%" }} display="flex" justifyContent="center" alignItems="center" p={10}>
          <Image borderRadius="full" boxSize="300px" src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHBsYXRmb3JtfGVufDB8fHx8MTcwODYyNDQ1NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Social Media Illustration" objectFit="cover" />
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={4}>
        <Center>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} align="center">
            <Text>&copy; {new Date().getFullYear()} Verbatim</Text>
            <Text>Privacy Policy</Text>
            <Text>Terms of Service</Text>
            <Text>Contact Us</Text>
          </Stack>
        </Center>
      </Box>
    </Container>
  );
};

export default Index;
