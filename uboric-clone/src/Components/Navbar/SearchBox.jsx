import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AppContextMine } from "../../Context/AppContextMine";
import SearchIcon from "../assets/Icons/SearchIcon";

export default function SearchBox() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [val, setVal] = useState("");

  const { setSearchItem } = useContext(AppContextMine);

  const handleSearch = () => {
    setSearchItem(val);
    setVal("");
    onClose();
  };

  return (
    <Box sx={{ cursor: "pointer" }}>
      <SearchIcon props={{ btnRef, onOpen }} />

      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search</DrawerHeader>

          <DrawerBody>
            <Input
              value={val}
              onChange={(e) => setVal(e.target.value)}
              placeholder="search for items"
            />
            <Button onClick={handleSearch}>Search</Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
