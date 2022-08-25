import { Box, Flex, Image } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function CarouselBottom() {
  const links = [
    {
      id: 1,
      to: "/shop",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2020/10/JD/MU/CL/79110241/plastic-kitkat-air-tight-container-600-ml-500x500.jpg",
    },
    {
      id: 2,
      to: "/shop",
      image:
        "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/07/01/0/RX_Getty-Images-Kitchen-Tools_s4x3.jpg.rend.hgtvcom.406.305.suffix/1593618139144.jpeg",
    },
    {
      id: 3,
      to: "/shop",
      image:
        "https://959470.smushcdn.com/2350589/wp-content/uploads/2022/03/Yeepi-BBQ-Long-Gas-Lighter-5002B-1-1024x683.jpg?lossy=1&strip=1&webp=1",
    },
  ];

  return (
    <Box padding="2rem" bg="black">
      <Flex gap="2rem">
        {links.map((item) => (
          <Box>
            <NavLink key={item.id} to={item.to}>
              <Image h="300px" sx={{ objectFit: "contain" }} src={item.image} />
            </NavLink>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
