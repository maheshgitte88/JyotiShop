import React, { useContext, useState } from "react";
import {
  Flex,
  Image,
  Box,
  Text,
  Icon,
  Button,
  useToast,
} from "@chakra-ui/react";
import { GoStar } from "react-icons/go";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import NormalNav from "../../components/NormalNav";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { site } from "../../components/backend";
import axios from "axios";
import SaveOrderButton from "./SaveOrderButton";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { CartContext } from "../../CartContext";

const postCart = async (data) => {
  let toki = localStorage.getItem("token");
  const res = await axios.post(`${site}/carts`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
 
};

const LaptopScreen = ({ data }) => {
  const { setCartCount } = useContext(CartContext);
  const [Imageurl, setimageurl] = useState(data.img[0]);
  const { isAuth, token } = useSelector((store) => store.auth);
  const toast = useToast();
  const handleTheCart = (data) => {
    if (isAuth == false) {
      toast({
        position: "top",
        title: `Login to add the product in cart`,
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } else {
      postCart(data);
      toast({
        position: "top",
        title: `Product is add in your cart`,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setCartCount((previousCount) => previousCount + 1);
    }
  };
  const handleBuyTheCart = (data) => {
    if (isAuth == false) {
      toast({
        position: "top",
        title: `Login to add the product in cart`,
        status: "warning",
        duration: 1500,
        isClosable: true,
      });
    } else {
      postCart(data);
      window.location= '/cart'
      toast({
        position: "top",
        title: `Product is add in your cart`,
        status: "success",
        duration: 1500,
        isClosable: true,
      });
      setCartCount((previousCount) => previousCount + 1);
    }
  };

  const handleImageHover = (imageUrl) => {
    setimageurl(imageUrl);
  };
  const handleImageLeave = () => {
    setimageurl(Imageurl);
  };

  function calculatePercentage(price, strike) {
    const priceValue = parseFloat(price.replace(/,/g, ""));
    const strikeValue = parseFloat(strike.replace(/,/g, ""));
    const difference = priceValue - strikeValue;
    const percentage = (difference / strikeValue) * 100;
    return percentage.toFixed(2);
  }

  return (
    <Box>
      {/* <NormalNav /> */}
      <Flex w={"100%"} ml={"15px"} mt={"5px"} justifyContent={"space-between"}>
        {/* Product  */}
        <Box
          display={"flex"}
          flexDirection="column"
          pt={5}
          mt={5}
          ps={12}
          ms={12}
          // justifyContent={"space-between"}
          p={"10px"}
          // border={"1px solid red"}
        >
          {data &&
            data.img.map((el) => (
              <Image
                width={"70px"}
                pt={5}
                mt={5}
                h="70px"
                src={el}
                // onClick={() => handleImageClick(el)}
                onMouseEnter={() => handleImageHover(el)}
                onMouseLeave={handleImageLeave}
                cursor={"pointer"}
                alt="imgs"
              />
            ))}
        </Box>
        <Flex justifyContent={"center"} mt={5} mb={10} gap={10}>
          {/* Product Image  */}

          <Box>
            <Image width={"400px"} h="470px" m={5} src={Imageurl} />
          </Box>
          {/* Product details  */}
          <Box p={5}>
            <Text textAlign={"left"} fontSize={"24px"} fontWeight={"500"}>
              <h3>{data && data.title}</h3>
            </Text>
            <Box>
              {/* rating  */}
              <Flex mt={1} mb={1} gap={2} justifyContent={"left"}>
                <Flex
                  pl={"3px"}
                  pr={"3px"}
                  borderRadius={3}
                  bgColor={"green.500"}
                  gap={1}
                >
                  <Text fontSize={"10px"} fontWeight={500} color={"white"}>
                    {data && data.rating}
                  </Text>
                  <Icon
                    as={GoStar}
                    w={"10px"}
                    h={"10px"}
                    mt={"2px"}
                    color="white"
                  />
                </Flex>
                <Text fontSize={"10px"} color={"gray.500"} fontWeight={500}>
                  {data && data.reviews}
                </Text>
              </Flex>
              {/* Price  */}
              <Flex gap={3}>
                <Box>
                  <Text fontSize={"20px"} fontWeight={500}>
                    {data && data.price}
                  </Text>
                </Box>
                <Box>
                  <Text
                    mt={2}
                    fontSize={"13px"}
                    color={"gray.400"}
                    fontWeight={500}
                  >
                    <strike>{data && data.strik}</strike>
                  </Text>
                </Box>
                <Box>
                  <Text
                    mt={2}
                    fontSize={"13px"}
                    color={"green.500"}
                    fontWeight={500}
                  >
                    {data && calculatePercentage(data.price, data.strik)}% off
                  </Text>
                </Box>
              </Flex>

              {/* Description  */}
              <Box ml={2} mt={1}>
                <Text
                  textAlign={"left"}
                  mt={1}
                  mb={1}
                  fontSize={"13px"}
                  fontWeight={500}
                >
                  Highlights
                </Text>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.desc1}
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.desc2}
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.desc3}
                  </Text>
                </Flex>
                <Flex gap={2} wrap="wrap">
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.desc4.split(" ").map((word, index) => {
                      if (index % 16 === 0 && index !== 0) {
                        return (
                          <React.Fragment>
                            <br />
                            {word}{" "}
                          </React.Fragment>
                        );
                      }
                      return word + " ";
                    })}
                  </Text>
                </Flex>
              </Box>
              <Box ml={2} mt={1}>
                <Text
                  textAlign={"left"}
                  mt={1}
                  mb={1}
                  fontSize={"13px"}
                  fontWeight={500}
                >
                  Dimensions
                </Text>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  {/* <Flex gap={2}> */}
                  <Text fontSize={"11px"} fontWeight={600}>
                    Width :
                  </Text>{" "}
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.Width}
                  </Text>
                  {/* </Flex> */}
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text fontSize={"11px"} fontWeight={600}>
                    Length :
                  </Text>{" "}
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.Length}
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text fontSize={"11px"} fontWeight={600}>
                    Depth :
                  </Text>{" "}
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.Depth}
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text fontSize={"11px"} fontWeight={600}>
                    Weight :
                  </Text>{" "}
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    {data.Weight}
                  </Text>
                </Flex>
              </Box>
              {/* Seller  */}
              <Box ml={2} mt={1}>
                <div
                  style={{ display: "flex", padding: "5px" }}
                  className="product-data-warranty display-flex"
                >
                  <div
                    style={{ padding: "5px" }}
                    className="product-warranty-data"
                  >
                    <TbTruckDelivery className="warranty-icon" />
                    <small>Free Delivery</small>
                  </div>

                  <div
                    style={{ padding: "5px" }}
                    className="product-warranty-data"
                  >
                    <TbReplace className="warranty-icon" />
                    <small>30 Days Replacement</small>
                  </div>

                  <div
                    style={{ padding: "5px" }}
                    className="product-warranty-data"
                  >
                    <TbTruckDelivery className="warranty-icon" />
                    <small>DAS Delivered </small>
                  </div>

                  <div
                    style={{ padding: "5px" }}
                    className="product-warranty-data"
                  >
                    <MdSecurity className="warranty-icon" />
                    <small>2 Year Warranty </small>
                  </div>
                </div>
              </Box>
              <Box ml={2} mt={1}>
                <Text
                  textAlign={"left"}
                  mt={1}
                  mb={1}
                  fontSize={"13px"}
                  fontWeight={500}
                >
                  Seller
                </Text>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    30 day seller replacement policy/brand assistance for device
                    issues
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text
                    color={"gray.600"}
                    fontSize={"11px"}
                    fontWeight={"semibold"}
                  >
                    GST invoice available
                  </Text>
                </Flex>
                <Flex gap={2}>
                  <Icon
                    w={"4px"}
                    h={"4px"}
                    mt={"6px"}
                    color={"gray.600"}
                    as={AiTwotoneQuestionCircle}
                  />
                  <Text fontSize={"12px"} fontWeight={700}>
                    Certification :
                  </Text>{" "}
                  <Text
                    color={"gray.600"}
                    fontSize={"12px"}
                    fontWeight={"semibold"}
                  >
                    {data.Certification}
                  </Text>
                </Flex>
              </Box>
              {/* Button  */}
              <Flex mt={10} gap={3}>
                <Button
                  onClick={() => handleTheCart(data)}
                  _hover={{}}
                  w={"150px"}
                  bg={"none"}
                  bgColor={"rgb(255,159,0)"}
                >
                  <Flex gap={3} mt={"1px"}>
                    <Icon
                      m={"1px"}
                      h={4}
                      w={4}
                      color={"white"}
                      as={HiShoppingCart}
                    />
                    <Text fontWeight={500} color={"white"} fontSize={"13px"}>
                      ADD TO CART
                    </Text>
                  </Flex>
                </Button>
                <Button
                  onClick={() => {
                    handleBuyTheCart(data);
                  }}
                  _hover={{}}
                  w={"150px"}
                  bg={"none"}
                  bgColor={"rgb(255,159,0)"}
                >
                  <Flex gap={3} mt={"1px"}>
                    <Icon
                      m={"1px"}
                      h={4}
                      w={4}
                      color={"white"}
                      as={HiShoppingCart}
                    />
                    <Text fontWeight={500} color={"white"} fontSize={"13px"}>
                      BUY NOW
                    </Text>
                  </Flex>
                </Button>
                {/* <Button><SaveOrderButton cart={data} totalPrice={data.price}  /></Button> */}
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"90%"} ml={"10px"} justifyContent={"space-between"}>
        <Box ml={5} w={"100%"} mt={3}>
          <Text
            textAlign={"left"}
            mt={1}
            mb={1}
            fontSize={"18px"}
            fontWeight={500}
          >
            Detailed Description
          </Text>
          <Flex gap={2}>
            <Icon
              w={"4px"}
              h={"4px"}
              mt={"6px"}
              color={"gray.600"}
              as={AiTwotoneQuestionCircle}
            />
            <Text color={"gray.600"} fontSize={"16px"} fontWeight={"semibold"}>
              {data.OtherFeatures}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default LaptopScreen;
