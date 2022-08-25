import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import FooterBrand from "../assets/FooterBrand";
import FacebookIcon from "../assets/Icons/FacebookIcon";
import InstagramIcon from "../assets/Icons/InstagramIcon";

export default function MiddleFooter() {
  return (
    <Box
      sx={{
        color: "#B7C9CD",
        borderBottom: "1px solid #2A2B2B",
        paddingBottom: "2rem",
      }}
    >
      <Container maxW="1200px">
        <Flex justifyContent="space-between">
          <Box>
            <FooterBrand />
            <Flex margin="10px" gap="5px">
              <FacebookIcon siz={"30"} />
              <InstagramIcon siz={"30"} />
            </Flex>
          </Box>

          <Box>
            <Flex gap="0.5rem" flexDirection="column">
              <Heading
                color="white"
                as="h3"
                fontSize="1rem"
                fontWeight="medium"
              >
                SUPPORT
              </Heading>
              <Text>
                <NavLink to="/about-us">About Us</NavLink>
              </Text>
              <Text>
                <NavLink to="/contact-us">Contact Us</NavLink>
              </Text>
            </Flex>
          </Box>

          <Box>
            <Flex gap="0.5rem" flexDirection="column">
              <Heading
                color="white"
                as="h3"
                fontSize="1rem"
                fontWeight="medium"
              >
                SHOP
              </Heading>
              <Text>
                <NavLink to="/shop">My account</NavLink>
              </Text>
            </Flex>
          </Box>

          <Box>
            <Flex gap="0.5rem" flexDirection="column">
              <Heading
                color="white"
                as="h3"
                fontSize="1rem"
                fontWeight="medium"
              >
                COMPANY
              </Heading>
              <Text>
                <NavLink to="/shop">Shipping & Returns</NavLink>
              </Text>
              <Text>
                <NavLink to="/shop">Privacy Policy</NavLink>
              </Text>
              <Text>
                <NavLink to="/shop">Terms & Conditions</NavLink>
              </Text>
            </Flex>
          </Box>

          <Box>
            <Flex gap="0.5rem" flexDirection="column">
              <Heading
                color="white"
                as="h3"
                fontSize="1rem"
                fontWeight="medium"
              >
                CONTACT
              </Heading>
              <Text>Customer Care</Text>
              <Text>Contact Support Available</Text>
              <Text>Mon To Sat : 10:00 Am to 6:00 Pm</Text>
              <Text>E-mail</Text>
              <Text>uboricllp@gmail.com</Text>
              <Text>Mobile</Text>
              <Text>+91 97243 82162</Text>
              <Text>+91 82000 99386</Text>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
