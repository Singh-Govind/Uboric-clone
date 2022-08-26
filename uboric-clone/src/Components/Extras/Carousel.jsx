import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Button, Image } from "@chakra-ui/react";

export default function Carousel() {
  const products = [
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
    {
      id: 4,
      to: "/shop",
      image:
        "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <Image
              maxH="550px"
              sx={{ objectFit: "contain", position: "relative" }}
              src={item.image}
            />
            <Button
              sx={{
                position: "absolute",
                backgroundColor: "rgba(0, 0, 0, 0.96)",
                color: "white",
                padding: "2rem 3rem",
                borderRadius: "0",
                transition: "all 0.3s ease-in-out",
              }}
              _hover={{
                backgroundColor: "black",
                transform: "scale(1.1)",
              }}
            >
              Shop Now
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
