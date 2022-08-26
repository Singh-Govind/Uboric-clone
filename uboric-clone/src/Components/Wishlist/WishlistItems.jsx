import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Image,
  Button,
} from "@chakra-ui/react";

export default function WishlistItems() {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <Th></Th>
            <Th>Product Name</Th>
            <Th>Unit Price</Th>
            <Th>Stock Status</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>*</Td>
            <Td>
              <Image src="https://www.uboric.com/wp-content/uploads/2022/08/Black-Magic-very-sexy-sheer-babydoll-nightwear-370x370.jpg" />
            </Td>
            <Td>"Black Magic" Very Sexy Sheer Babydoll Nightwear Lingerie</Td>
            <Td>₹1,299.00 ₹999.00</Td>
            <Td>In Stock</Td>
            <Td>
              <Button>Add To Cart</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
