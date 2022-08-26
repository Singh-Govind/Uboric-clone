import { Box, Container } from "@chakra-ui/react";
import Carousel from "../Components/Extras/Carousel";
import BestSellings from "../Components/Homepage/BestSellings";
import CarouselBottom from "../Components/Homepage/CarouselBottom";
import HomepageBottomMessage from "../Components/Homepage/HomepageBottomMessage";

export default function Homepage() {
  return (
    <Box>
      <Box>
        <Carousel />
      </Box>
      <Box>
        <CarouselBottom />
      </Box>

      <Container maxW="1200px">
        <BestSellings />
      </Container>

      <HomepageBottomMessage />
    </Box>
  );
}
