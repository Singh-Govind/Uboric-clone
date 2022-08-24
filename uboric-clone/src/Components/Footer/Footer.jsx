import { Box } from "@chakra-ui/react";
import BottomFooterPart from "./BottomFooterPart";
import TopSection from "./TopSection";

export default function Footer() {
  return (
    <Box
      backgroundImage="url('https://outstripinfotech.com/wpword/razi/wp-content/uploads/2022/08/footer_bg_1920.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <TopSection />
      <BottomFooterPart />
    </Box>
  );
}
