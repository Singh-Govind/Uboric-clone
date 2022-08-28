import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function OrderPlaced() {
  return (
    <Flex
      flexDirection="column"
      m="5rem"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontWeight="bold" textTransform="uppercase" m="3rem" fontSize="5xl">
        Order Placed
      </Text>
      <Text
        fontWeight="medium"
        bg="lightgray"
        p="0.5rem 1rem"
        borderRadius="5px"
        fontSize="3xl"
      >
        <Link to="/">Go Home</Link>
      </Text>
    </Flex>
  );
}
