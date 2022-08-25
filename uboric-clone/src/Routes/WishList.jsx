import { Box, Container, Flex, Text } from "@chakra-ui/react";
import WishListHeaderName from "../Components/Wishlist/WishListHeaderName";
import WishlistItems from "../Components/Wishlist/WishlistItems";

export default function WishList() {
  return (
    <Box>
      <Container maxW="1200px">
        <Box>
          <Flex minH="300px" justifyContent="center" alignItems="center">
            <Text fontSize="2rem" fontWeight="bold">
              Wishlist
            </Text>
          </Flex>
        </Box>

        <Box padding="1rem 0" m="2rem 0">
          <WishListHeaderName />
        </Box>
        <Box>
          <WishlistItems />
        </Box>
        <Box margin="2rem 0">Share on:</Box>
      </Container>
    </Box>
  );
}
