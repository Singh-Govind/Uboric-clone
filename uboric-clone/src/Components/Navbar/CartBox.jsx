import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppContextMine } from "../../Context/AppContextMine";
import CartIcon from "../assets/Icons/CartIcon";
import CartDataForNavbar from "./CartDataForNavbar";

export default function CartBox() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [data, setData] = React.useState([]);
  const [test, setTest] = useState(1);

  //context data
  const { num, totalPrice, setTotalPrice } = useContext(AppContextMine);

  let prev = num;

  console.log(prev, "prev", num);
  if (test != num) {
    console.log("inside if", prev, "!=", num);
    setTest(test + 1);
  }

  const getCartItems = () => {
    axios.get(`https://uboric-server.herokuapp.com/cart`).then((res) => {
      setData(res.data);
    });
  };

  useState(() => {
    console.log("inside num", num);
    getCartItems();
  }, [totalPrice, num]);

  let cartItems = 0;
  data.forEach((item) => {
    cartItems += +item.quantity;
  });

  let p = 0;
  data?.forEach((item) => {
    p += +item.discount_price * +item.quantity;
  });
  setTotalPrice(p);

  return (
    <Box sx={{ cursor: "pointer" }}>
      <CartIcon props={{ btnRef, onOpen }} />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex justifyContent="center" alignItems="center">
              Cart Items ({cartItems})
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            {data.length === 0 ? (
              "Nothing here"
            ) : (
              <CartDataForNavbar data={data} getCartItems={getCartItems} />
            )}
          </DrawerBody>
          <DrawerFooter p=" 2rem" flexDirection="column" alignItems="flex-end">
            <Text fontSize="2xl" fontWeight="medium" m="1rem 0">
              Total {totalPrice}
            </Text>
            <Text
              onClick={onClose}
              sx={{
                backgroundColor: "lightgray",
                padding: "0.5rem 1rem",
                borderRadius: "5px",
              }}
            >
              <Link to="/checkout">Checkout</Link>
            </Text>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
