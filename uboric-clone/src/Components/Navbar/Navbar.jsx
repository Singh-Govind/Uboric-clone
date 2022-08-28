import { Box, Text, Container, Flex } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AppContextMine } from "../../Context/AppContextMine";
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
  const [data, setData] = useState([]);

  const { num } = useContext(AppContextMine);

  let cartItems = 0;
  const getCartItems = () => {
    axios.get(`https://uboric-server.herokuapp.com/cart`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getCartItems();
  }, [num]);

  data.forEach((item) => {
    cartItems += +item.quantity;
  });

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
            <Box position="relative">
              <CartBox />
              <span
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "-10px",
                  zIndex: "10",
                  background: "red",
                  padding: "0px 7px",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "14px",
                  borderRadius: "50%",
                }}
              >
                {cartItems}
              </span>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
