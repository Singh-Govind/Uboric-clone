import { Box, Container, Flex } from "@chakra-ui/react";
import Copyright from "./Copyright";

export default function BottomFooterPart() {
  return (
    <Box>
      <Container>
        <Flex justifyContent="space-between">
          <Copyright />
        </Flex>
      </Container>
    </Box>
  );
}
