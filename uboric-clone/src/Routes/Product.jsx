import { Box, Container } from "@chakra-ui/react";
import ProductDisplay from "../Components/PagesComponents/Shop/ProductDisplay";

export default function Product() {
  return (
    <Box mt="3rem">
      <Container maxW="1200px">
        <ProductDisplay />
      </Container>
    </Box>
  );
}
