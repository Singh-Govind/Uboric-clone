import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

export default function BestSellings() {
  return (
    <Box>
      <SimpleGrid gap="1rem" columns={3}>
        <Flex>
          <Box>
            <Image src="" />
            <Box>
              <Text>Quck & Easy Blade </Text>
            </Box>
          </Box>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}
