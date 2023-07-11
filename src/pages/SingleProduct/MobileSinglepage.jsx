import {
  Box,
  Center,
  Image,
  Text,
  Icon,
  Flex,
  Button,
  useToast,
} from "@chakra-ui/react";
import { GoStar } from "react-icons/go";
import React, { useState } from "react";
import { AiTwotoneQuestionCircle } from "react-icons/ai";
import NormalNav from "../../components/NormalNav";
import { HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { site } from "../../components/backend";
import axios from "axios";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";

const postCart = async (data) => {
  let toki = localStorage.getItem("token");

  const res = await axios.post(`${site}/carts`, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
 
};

const MobileSinglepage = ({ data }) => {
  let objLength = Object.keys(data).length;
  const [Imageurl, setimageurl] = useState(data.img && data.img.length > 0 ? data.img[0] : "");
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
    }
  };

  const handleTheBuyNow = (data) => {
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
      window.location = "/cart";
    }
  };


  const handleImageHover = (imageUrl) => {
    setimageurl(imageUrl);
  };
  const handleImageLeave = () => {
    setimageurl(data.img && data.img.length > 0 ? data.img[0] : "");
  }; 
const handelonloadImg = (imageUrl) => {
  setimageurl(imageUrl);
};

  return (
    <Box mb={10}>
      {objLength > 0 && (
        <Box>
         <Box>
          <Center display={"flex"} gap="10px" mt="10px">
            {data &&
              data.img.map((el) => (
                <Image
                  width={"70px"}
                  h="70px"
                  onMouseEnter={() => handleImageHover(el)}
                  onMouseLeave={handleImageLeave}
                  onLoad={() => handelonloadImg(el)} // Modified function call
                  cursor={"pointer"}
                  src={el.toString()} // Converted Imageurl value to string
                />
              ))}
          </Center>
          <Center mt={8} mb={10}>
            <Image width={"400px"} h="350px" src={Imageurl.toString()} />
          </Center>
        </Box>
          <Box ml={3} mr={3}>
            <Text textAlign={"left"} fontWeight={500} fontSize={"22px"}>
              {data && data.title}
            </Text>
            {/* Rating  */}
            <Flex mt={2} mb={2} gap={3}>
              <Flex
                pl={"6px"}
                pt={"2px"}
                pr={"6px"}
                borderRadius={3}
                bgColor={"green.500"}
                gap={1}
              >
                <Text fontSize={"12px"} fontWeight={500} color={"white"}>
                  {data && data.rating}
                </Text>
                <Icon
                  as={GoStar}
                  w={"10px"}
                  h={"10px"}
                  mt={"3px"}
                  color="white"
                />
              </Flex>
              <Text fontSize={"13px"} fontWeight={500} color={"gray.500"}>
                {data && data.reviews}
              </Text>
            </Flex>
            {/* Price  */}
            <Flex gap={3}>
              <Text fontWeight={500} fontSize={"18px"} color={"green"}>
                {data && data.off}
              </Text>
              <Text fontWeight={500} fontSize={"18px"}>
                <strike>{data && data.strik}</strike>
              </Text>
              <Text fontWeight={500} fontSize={"18px"}>
                {data && data.price}
              </Text>
            </Flex>
            <Flex justifyContent={"space-between"} mt={8}>
              <Button width={"48%"} onClick={() => handleTheCart(data)}>
                <Flex gap={3} mt={"1px"}>
                  <Icon h={5} w={5} color={"orange.300"} as={HiShoppingCart} />
                  <Text fontWeight={700} color={"orange.300"} fontSize={"15px"}>
                    ADD TO CART
                  </Text>
                </Flex>
              </Button>
              <Button
                onClick={() => {
                  handleTheBuyNow(data);
                }}
                _hover={{}}
                width={"48%"}
                bgColor={"orange.300"}
                color={"white"}
              >
                Buy Now
              </Button>
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
              <div style={{ padding: "5px" }} className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <small>Free Delivery</small>
              </div>

              <div style={{ padding: "5px" }} className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <small>30 Days Replacement</small>
              </div>

              <div style={{ padding: "5px" }} className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <small>DAS Delivered </small>
              </div>

              <div style={{ padding: "5px" }} className="product-warranty-data">
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
        </Box>
      )}
    </Box>
  );
};

export default MobileSinglepage;
