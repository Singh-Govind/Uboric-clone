import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  SimpleGrid,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import axios from "axios";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { useContext } from "react";
import { AppContextMine } from "../../../Context/AppContextMine";

export default function ProductDisplay() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [price, setPrice] = useState("");
  const [sortval, setSortval] = useState("");

  const { searchItem } = useContext(AppContextMine);

  const changePrice = (val) => {
    setPrice(val);
  };

  const getData = (page, price, sortval, searchItem) => {
    let gte;
    let lte;
    if (price == "") {
      gte = 1;
      lte = 100000;
    } else {
      [gte, lte] = price.trim().split(" ");
    }

    axios
      .get(
        `https://uboric-server.herokuapp.com/products?q=${searchItem}&_page=${page}&_limit=9&discount_price_gte=${gte}&discount_price_lte=${lte}&_sort=discount_price&_order=${sortval}`
      )
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData(page, price, sortval, searchItem);
  }, [page, price, sortval, searchItem]);

  return (
    <Box>
      <Flex gap="3rem" justifyContent="space-between">
        <Box w="500px">
          <Filter changePrice={changePrice} />
        </Box>
        {/* filter */}

        {/* items card */}
        <Box>
          <Box mb="2rem">
            <Flex justifyContent="space-between">
              <Text fontWeight="bold" fontSize="2xl">
                Shop
              </Text>
              <Box>
                <Menu closeOnSelect={true}>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {sortval === "asc"
                      ? "Low To High"
                      : sortval === "desc"
                      ? "High To Low"
                      : "Default"}
                  </MenuButton>
                  <MenuList minWidth="240px">
                    <MenuOptionGroup
                      defaultValue=""
                      title="Order"
                      onChange={setSortval}
                      type="radio"
                    >
                      <MenuItemOption value="">Default</MenuItemOption>
                      <MenuItemOption value="asc">
                        Price Low to High
                      </MenuItemOption>
                      <MenuItemOption value="desc">
                        Price High to Low
                      </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Box>
            </Flex>
          </Box>
          {data?.length == 0 ? (
            <Box w="800px">
              <Text fontSize="5xl" fontWeight="bold">
                No Items Found
              </Text>
            </Box>
          ) : (
            <Box>
              <SimpleGrid columns={3} gap="2rem">
                {data.map((item) => (
                  <ProductCard key={item.id} {...item} />
                ))}
              </SimpleGrid>

              <Flex justifyContent="center" m="2rem">
                <Button onClick={() => setPage(page - 1)}>Prev</Button>
                <Text fontSize="2xl" fontWeight="medium" m="0 10px">
                  {page}
                </Text>
                <Button onClick={() => setPage(page + 1)}>Next</Button>
              </Flex>
            </Box>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
