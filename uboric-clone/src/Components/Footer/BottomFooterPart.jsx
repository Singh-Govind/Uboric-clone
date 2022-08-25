import { Box, Container, Flex } from "@chakra-ui/react";
import FacebookIcon from "../assets/Icons/FacebookIcon";
import InstagramIcon from "../assets/Icons/InstagramIcon";
import Copyright from "./Copyright";

export default function BottomFooterPart() {
  return (
    <Box padding="10px 0">
      <Container maxW="1200px">
        <Flex justifyContent="space-between" alignItems="center">
          <Copyright />
          <Flex gap="5px">
            <FacebookIcon siz="30" />
            <InstagramIcon siz="30" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
