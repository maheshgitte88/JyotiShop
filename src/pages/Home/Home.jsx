import { Box, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import HomeNav from "../../components/HomeNav";
import ImageSlider from "../../components/ImageSlider";
import ImageSliderMob from "../../components/ImageSliderMob";
import GrocerySlider from "./GrocerySlider";
import MobileHomeSlider from "./MobileHomeSlider";

const Home = () => {
  // const [isLargerThan1280] = useMediaQuery("(min-width: 279px)");

  return (
    <Box>
      <ImageSlider />
      <Box mt={10} mb={10}>
        <GrocerySlider />
      </Box>
    </Box>
  );
};

export default Home;
