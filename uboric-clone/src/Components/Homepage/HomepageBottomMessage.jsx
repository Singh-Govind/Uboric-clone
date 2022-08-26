import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function HomepageBottomMessage() {
  return (
    <Box>
      <Container maxW="1200px">
        <Box>
          <Center>
            <Heading as="h3" fontSize="1.8rem" sx={{ marginBlock: "1rem" }}>
              The Ultimate Domestic Online Shopping Experience Platform in India
            </Heading>
          </Center>
          <Text sx={{ color: "gray", lineHeight: "1.8" }}>
            Online shopping with Uboric is quick, convenient and trouble-free.
            You can shop for the desired product right from the comfort of your
            home and get them delivered straight to your doorstep. Uboric offers
            you the chance to choose top branded products sitting in the comfort
            of your homes and just clicking on your requirements to get it
            delivered at your doorstep. Your search for the latest trending
            variety of unique products ends right here. A wide range of
            international products from global brands are available at your
            fingertips. We provide you with a world-class online shopping
            experience, along with superior service, to suit all your specific
            requirements. Our products are very reasonably priced and are not
            easily available elsewhere. Our high-end technology-based systems,
            combined with a human approach, ensure that you have an amazing and
            blissful online shopping experience with us. Our emphasis on
            customer delight drives every activity we undertake to provide you
            an ultimate, hassle-free and pleasant shopping experience. Our
            diverse categories of products comprise of fashion & jewellery,
            mobiles and tablets, home and furniture, electronics, health care
            and supplements, sports and fitness, beauty and perfumes. We offer
            almost every variety of product that your heart desires. Just Go
            Ahead and Explore the magical world of online shopping with Uboric!
            24×7 Customer Care: For all your queries and concerns regarding your
            shopping orders.
          </Text>
        </Box>
        <Box m="3rem 0">
          <SimpleGrid columns={2} sx={{ gap: "2rem" }}>
            <Flex flexDirection="column" gap="2rem">
              <Heading as="h3">Benefits Of Shopping</Heading>
              <Text color="gray" fontWeight="medium">
                User-Friendly
              </Text>
              <Text color="gray" fontWeight="medium">
                Safe & Secure Shopping
              </Text>
              <Text color="gray" fontWeight="medium">
                Check Out Closely
              </Text>
              <Text color="gray" fontWeight="medium">
                Multiple Payment Options
              </Text>
              <Text color="gray" fontWeight="medium">
                Order History
              </Text>
              <Box>
                <NavLink to="/">
                  <Button
                    bg="black"
                    color="white"
                    borderRadius="2"
                    padding="0 1.5rem"
                    _hover={{ background: "black" }}
                  >
                    Shop Now
                  </Button>
                </NavLink>
              </Box>
            </Flex>
            <Image src="https://www.uboric.com/wp-content/uploads/2022/08/61OR0aPLJAL._SL1500_-670x575.jpg" />
          </SimpleGrid>
        </Box>
        <SimpleGrid gap="1rem" columns={4} m="3rem 0">
          <Flex gap="2rem">
            <Image src="https://demo4.drfuri.com/media/razzi/truck3.svg" />
            <Box>
              <Text fontSize="14px" fontWeight="medium">
                FREE SHIPPING
              </Text>
              <Text fontSize="14px" color="gray">
                From all orders over Rs 500
              </Text>
            </Box>
          </Flex>
          <Flex gap="2rem">
            <Image src="https://demo4.drfuri.com/media/razzi/money.svg" />
            <Box>
              <Text fontSize="14px" fontWeight="medium">
                FREE RETURNS
              </Text>
              <Text fontSize="14px" color="gray">
                Return money within 30 days
              </Text>
            </Box>
          </Flex>
          <Flex gap="2rem">
            <Image src="https://demo4.drfuri.com/media/razzi/box.svg" />
            <Box>
              <Text fontSize="14px" fontWeight="medium">
                SECURE SHOPPING
              </Text>
              <Text fontSize="14px" color="gray">
                You're in safe hands
              </Text>
            </Box>
          </Flex>
          <Flex gap="2rem">
            <Image src="https://demo4.drfuri.com/media/razzi/like.svg" />
            <Box>
              <Text fontSize="14px" fontWeight="medium">
                OVER 10,000 STYLES
              </Text>
              <Text fontSize="14px" color="gray">
                We have everything you need
              </Text>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
