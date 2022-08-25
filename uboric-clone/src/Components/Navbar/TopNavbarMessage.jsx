import { Flex, Text } from "@chakra-ui/react";

export default function TopNavbarMessage(){

    return <Flex sx={{minH:"50px"}} bg="#1E1F1E" color="white" justifyContent="center" alignItems="center">
        <Text fontSize="sm" fontWeight="medium">FOR ONLINE PAYMENT EXTRA ₹10% DISCOUNT ON ORDERS ABOVE ₹500</Text>
    </Flex>
}