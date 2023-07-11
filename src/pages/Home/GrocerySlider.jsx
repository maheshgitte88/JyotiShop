import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  Icon,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { site } from "../../components/backend";
import { GoStar } from "react-icons/go";

const getMobileData = async () => {
  const res = await axios.get(`${site}/products/Home`);
  return res.data;
};

const GrocerySlider = () => {
  const [mobileData, setMobileData] = useState([]);
  const [mobileDataOne, setMobileDataOne] = useState([]);
  const [mobileDataTwo, setMobileDataTwo] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMobileData();
        setMobileData(res[0]);
        setMobileDataOne(res[1]);
        setMobileDataTwo(res[2]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(mobileData, mobileDataOne, mobileDataTwo);

  return (
    <>
      {loading ? (
        <div>
          <Flex
            style={{ paddingTop: "50px" }}
            justifyContent="center"
            flexDirection="row"
          >
            <Center  >
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
              fontSize="19px"
              color="blue.500"
            >
              Loading ...
            </Text>
          </Flex>
        </div>
      ) : (
          <Center>
          <Box
            border="1px"
            borderColor="gray.300"
            w={["100%", "50%", "33.33%"]}
            mb={["20px", "0"]}
            px={10}
            textAlign="center"
          >
            <a href="/Product">
              <Center
                h="380px"
                transition="transform 0.3s"
                _hover={{ transform: "scale(1.2)" }}
              >
                <Image
                  width="300px"
                  height="350px"
                  src={mobileDataTwo.img[0]}
                />
              </Center>

              <Flex flexDirection="column" justifyContent="center" mt={5}>
                <Flex flexDirection="row" justifyContent="center" mt={5}>
                  <Text
                    noOfLines={1}
                    fontWeight={500}
                    me={5}
                    fontSize={["14px", "18px"]}
                  >
                    Price : &#8377; {mobileDataTwo.price}
                  </Text>
                  <Text
                    noOfLines={1}
                    fontWeight={500}
                    ms={5}
                    fontSize={["14px", "18px"]}
                  >
                    Brand : {mobileDataTwo.brand}
                  </Text>
                </Flex>
                <Flex mt={1} mb={1} gap={2} justifyContent="center">
                  <Flex
                    pl="3px"
                    pr="3px"
                    borderRadius={3}
                    bgColor="green.500"
                    align="center"
                    justify="center"
                    w={["30px", "40px"]}
                    h={["20px", "30px"]}
                  >
                    <Text
                      fontSize={["10px", "12px"]}
                      fontWeight={500}
                      color="white"
                    >
                      {mobileDataTwo && mobileDataTwo.rating}
                    </Text>
                    <Icon
                      as={GoStar}
                      w="10px"
                      h="10px"
                      mt={"2px"}
                      color="white"
                    />
                  </Flex>
                  <Text fontSize={"10px"} color="gray.500" fontWeight={500}>
                    {mobileDataTwo && mobileDataTwo.reviews}
                  </Text>
                </Flex>
              </Flex>

              <Text
                mt={5}
                noOfLines={1}
                fontWeight={500}
                fontSize={["20px", "25px"]}
                textAlign="center"
              >
                {mobileDataTwo.title}
              </Text>
            </a>
          </Box>
          </Center>
        
        
      )}
    </>
  );
};

export default GrocerySlider;
