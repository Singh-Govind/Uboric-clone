import { Box, Flex, Text } from "@chakra-ui/react";
import NewsLetterBox from "./NewsLetterBox";

export default function TopSection() {
  return (
    <Box sx={{ margin: "1rem 0", padding: "2rem 0" }}>
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
      <Box sx={{ borderBottom: "1px solid #2A2B2B", paddingBottom: "2rem" }}>
        <NewsLetterBox />
      </Box>
    </Box>
  );
}
