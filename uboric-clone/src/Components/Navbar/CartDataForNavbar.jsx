import { Box, Button, Flex, Text } from "@chakra-ui/react";
import axios from "axios";
import { useContext } from "react";
import { AppContextMine } from "../../Context/AppContextMine";

export default function CartDataForNavbar({ data, getCartItems }) {
  const { num, setNum } = useContext(AppContextMine);

  const deleteItem = (id) => {
    axios.delete(`https://uboric-server.herokuapp.com/cart/${id}`);

    setTimeout(() => {
      getCartItems();
    }, 1000);

    setNum(num + 1);
  };

  return (
    <Box>
      {data.map((item) => {
        return (
          <Box
            key={item.id}
            sx={{
              border: "1px solid lightgray",
              margin: "0.5rem 0",
              padding: "0.5rem 1rem",
            }}
          >
            <Text fontWeight="medium">{item.title}</Text>
            <Text>quantity : {item.quantity}</Text>
            <Flex justifyContent="space-between" m="0.5rem">
              <Button
                onClick={() => deleteItem(item.id)}
                colorScheme="red"
                size="sm"
              >
                remove
              </Button>
              <Text>₹ {item.discount_price}</Text>
            </Flex>
          </Box>
        );
      })}
    </Box>
  );
}
