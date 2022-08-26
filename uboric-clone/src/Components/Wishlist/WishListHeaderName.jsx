import { Box, Heading, Input } from "@chakra-ui/react";
import { useRef } from "react";
import { useState } from "react";

export default function WishListHeaderName() {
  const [name, setName] = useState("My Wishlist");
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.focus();
  };

  return (
    <Box>
      <Heading as="h2" onClick={handleClick}>
        <Input
          fontWeight="bold"
          fontSize="1.5rem"
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
          border="0"
          w="auto"
        />
      </Heading>
    </Box>
  );
}
