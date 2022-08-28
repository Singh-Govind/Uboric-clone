import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Container,
  Image,
  Box,
  Tfoot,
  Text,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppContextMine } from "../Context/AppContextMine";

export default function Checkout() {
  const [data, setData] = useState([]);
  const { totalPrice } = useContext(AppContextMine);

  const getCartItems = () => {
    axios.get(`https://uboric-server.herokuapp.com/cart`).then((res) => {
      setData(res.data);
    });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <Container maxW="1200px" m="4rem auto">
      <Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th></Th>
                <Th>Name</Th>
                <Th>Quantity</Th>
                <Th>Price</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item) => {
                return (
                  <Tr key={item.key}>
                    <Td>{<Image w="100px" src={item.image} />}</Td>
                    <Td>{item.title}</Td>
                    <Td>{item.quantity}</Td>
                    <Td>{item.price}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td>
                  <Text fontWeight="bold">TotalPrice</Text>
                </Td>
                <Td>
                  <Text fontWeight="bold">₹{totalPrice}</Text>
                </Td>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <Flex m="3rem" justifyContent="flex-end">
          <Link to="/placeorder">
            <Text
              bg="gray.100"
              fontWeight="bold"
              p="1rem 2rem"
              borderRadius="5px"
              fontSize="xl"
            >
              Place Order
            </Text>
          </Link>
        </Flex>
      </Box>
    </Container>
  );
}
