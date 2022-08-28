import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

export default function Filter({ changePrice }) {
  const [val, setVal] = useState("");

  useEffect(() => {
    changePrice(val);
  }, [val]);

  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem mb="2rem" border="0" borderBottom="1px solid lightgray">
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left" style={{ fontSize: "1.5rem" }}>
              Price
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <RadioGroup value={val} onChange={setVal}>
            <Stack>
              <Radio value="200 499">₹200 - ₹499</Radio>
              <Radio value="500 999">₹500 - ₹999</Radio>
              <Radio value="1000 1199">₹1000 - ₹1199</Radio>
              <Radio value="2000 1000000">₹2000+</Radio>
            </Stack>
          </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
