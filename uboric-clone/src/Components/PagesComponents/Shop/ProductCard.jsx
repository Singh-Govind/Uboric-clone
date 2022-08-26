import { Box, Flex, Image, Text } from "@chakra-ui/react";

export default function ProductCard({
  title,
  image,
  id,
  price,
  discountPrice,
  category,
}) {
  console.log(image);

  return (
    <Box>
      <Box>
        <Image h="350px" src={image} alt={title} />
      </Box>
      <Box>
        <Text>{title}</Text>
        <Flex>
          <Text>
            {" "}
            <strike>{price}</strike>{" "}
          </Text>
          <Text>{discountPrice}</Text>
        </Flex>
      </Box>
    </Box>
  );
}
