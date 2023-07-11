import axios from "axios";
import { Box, Center, Flex, Image, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { site } from "../../components/backend";
import { Link } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const getMobileData = async () => {
  const res = await axios.get(`${site}/products/Home`);
  return res.data;
};

const MobileHomeSlider = () => {
  const [mobileData, setMobileData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleTheFetch();
  }, []);
  const handleTheFetch = async () => {
    setLoading(true);
    await getMobileData().then((res) => setMobileData(res));
    setLoading(false);
  };

  return (
    <Box>
      {loading && (
        <div>
          <Flex
            style={{ paddingTop: "50px" }}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Center>
              <Spinner
                m={10}
                thickness="4px"
                speed="0.75s"
                emptyColor="gray.200"
                color="blue.500"
                size="xl"
              />
            </Center>
            <Text
              mt={5}
              mb={10}
              fontWeight={500}
              fontSize={"19px"}
              color={"blue.500"}
            >
              Loading ...
            </Text>
          </Flex>
        </div>
      )}

      <Flex mb={5}>
        <Box border={"1px"} borderColor={"gray.300"} w={"100%"}>
          {mobileData.length > 0 &&
            mobileData.slice(0, 4).map((post, i) => (
              <Link to={`/singlepage/${post._id}`}>
                <Box
                  onClick={() => Navigator("/mobile")}
                  h={320}
                  pl={2}
                  pt={2}
                  pr={2}
                  key={i}
                >
                  <Center>
                    <Image width={"200px"} h={"300px"} src={post.img[0]} />
                  </Center>
                  <Text mt={3} noOfLines={1} fontWeight={500} fontSize={"10px"}>
                    <Center>{post.title}</Center>
                  </Text>
                </Box>
                <br />
              </Link>
            ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default MobileHomeSlider;
