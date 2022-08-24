import { Box, Flex, Text } from "@chakra-ui/react";
import NewsLetterBox from "./NewsLetterBox";

export default function TopSection() {
  return (
    <Box sx={{ margin: "1rem", padding: "2rem" }}>
      <Flex justifyContent={"center"}>
        <Text
          sx={{
            color: "white",
            marginBottom: "2rem",
            fontSize: "1.5rem",
            fontWeight: "medium",
          }}
        >
          Want style Ideas and Treats?
        </Text>
      </Flex>
      <NewsLetterBox />
    </Box>
  );
}
