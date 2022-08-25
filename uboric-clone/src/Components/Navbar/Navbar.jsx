import { Box, Text, Container, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import Brand from "../assets/Brand";
import HeartIcon from "../assets/Icons/HeartIcon";
import CartBox from "./CartBox";
import SearchBox from "./SearchBox";
import TopNavbarMessage from "./TopNavbarMessage";
import User from "./User";

export default function Navbar() {
  const links = [
    {
      id: 1,
      to: "/",
      title: "Home",
    },
    {
      id: 2,
      to: "/about-us",
      title: "About Us",
    },
    {
      id: 3,
      to: "/shop",
      title: "Shop",
    },
    {
      id: 4,
      to: "#",
      title: "Categories",
    },
    {
      id: 5,
      to: "/contact-us",
      title: "Contact Us",
    },
  ];

  return (
    <Box sx={{ borderBottom: "1px solid lightgray" }}>
      <TopNavbarMessage />
      <Container maxW="1200px" p="20px 0">
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <NavLink to="/">
              <Brand />
            </NavLink>
          </Box>
          <Flex minW="400px" justifyContent="space-around">
            {links.map((item) => (
              <NavLink key={item.id} to={item.to}>
                <Text
                  _hover={{
                    color: "red",
                    borderBottom: "1px solid red",
                    transition: "0.4s all ease-in",
                  }}
                >
                  {item.title}
                </Text>
              </NavLink>
            ))}
          </Flex>
          <Flex minW="250px" justifyContent="space-around">
            <SearchBox />
            <User />
            <NavLink to="/wishlist">
              <HeartIcon />
            </NavLink>
            <CartBox />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
