import { Button, Flex, Input } from "@chakra-ui/react";

export default function NewsLetterBox() {
  return (
    <Flex justifyContent="center" alignItems="center" gap="5px">
      <Input
        sx={{
          borderRadius: "0",
          border: "0",
          backgroundColor: "#303030",
          padding: "2rem",
        }}
        _focus={{ border: "0" }}
        size="lg"
        w="400px"
        placeholder="Enter Email *"
      />
      <Button
        sx={{
          borderRadius: "0",
          padding: "2rem",
          border: "0",
          backgroundColor: "#535253",
          color: "white",
        }}
        _hover={{ backgroundColor: "#535253" }}
        size="lg"
      >
        Subscribe
      </Button>
    </Flex>
  );
}
