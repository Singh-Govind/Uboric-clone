import { useState, useEffect } from "react";
import { Box, Button, SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import ProductCard from "./ProductCard";

export default function ProductDisplay() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const getData = (page) => {
    axios
      .get(
        `https://uboric-server.herokuapp.com/products?_page=${page}&_limit=10`
      )
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  return (
    <Box>
      <SimpleGrid columns={3} gap="2rem">
        {data.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </SimpleGrid>

      <Box>
        <Button onClick={() => setPage(page - 1)}>Prev</Button>
        <Text>{page}</Text>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Box>
    </Box>
  );
}
