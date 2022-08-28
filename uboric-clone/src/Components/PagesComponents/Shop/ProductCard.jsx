import { Box, Flex, Image, Text } from "@chakra-ui/react";
import AddToCart from "./AddToCart";

export default function ProductCard({
  title,
  image,
  id,
  price,
  discount_price,
  category,
}) {
  return (
    <Box border="1px solid lightgray" p="1rem">
      <Box>
        <Image h="200px" src={image} alt={title} />
      </Box>
      <Box>
        <Text textAlign="center" m="1rem" fontWeight="bold">
          {title}
        </Text>
        <Flex gap="1rem" justifyContent="center">
          <Text color="gray">
            <strike>₹{price}</strike>
          </Text>
          <Text color="tomato" fontWeight="bold">
            ₹{discount_price}
          </Text>
        </Flex>
        <Flex justifyContent="center" alignItem="center" m="1rem">
          <AddToCart id={id} price={discount_price} />
        </Flex>
      </Box>
    </Box>
  );
}
