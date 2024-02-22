import { Container } from "@chakra-ui/react";
import NavBar from "../components/NavBar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import FeaturesSection from "../components/FeaturesSection.jsx";
import CTASection from "../components/CTASection.jsx";
import Footer from "../components/Footer.jsx";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <NavBar />
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </Container>
  );
};

export default Index;
