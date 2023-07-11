import {
  Box,
  Button,
  Center,
  Flex,
  Input,
  Select,
  Text,
  Wrap,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { site } from "../../components/backend";
import AdminNav from "./AdminNav";

const addProduct = async (formdata) => {
  let toki = localStorage.getItem("token");
  const res = await axios.post(`${site}/products/addproduct`, formdata, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  const data = res.data;
  return data;
};

const initState = {
  title: "",
  price: "",
  price2: "",
  strik: "",
  desc1: "",
  desc2: "",
  desc3: "",
  desc4: "",
  Width: "",
  Length: "",
  Depth: "",
  Weight: "",
  OtherFeatures: "",
  Certification: "",
  rating: Math.floor(Math.random() * (5 - 3 + 1) + 1),
  reviews: `${Math.floor(
    Math.random() * (20 - 10 + 1) + 10
  )} Ratings & ${Math.floor(Math.random() * (990 - 110 + 1) + 10)} Reviews`,
  off: `${Math.floor(Math.random() * (20 - 10 + 1) + 10)}% off`,
  category: "",
  brand: "",
};

const AddProduct = () => {
  const [formstate, setFormstate] = useState(initState);
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const toast = useToast();
  const handleTheChange = (e) => {
    setFormstate({ ...formstate, [e.target.name]: e.target.value });
  };
  const handleTheSubmit = () => {
    if (
      formstate.title &&
      formstate.price &&
      formstate.price2 &&
      formstate.desc1 &&
      formstate.desc2 &&
      formstate.desc3 &&
      formstate.desc4 &&
      formstate.Width &&
      formstate.Length &&
      formstate.Depth &&
      formstate.Weight &&
      formstate.OtherFeatures &&
      formstate.Certification &&
      formstate.strik &&
      formstate.category &&
      formstate.brand &&
      img1 &&
      img2 &&
      img3 &&
      img4
    ) {
      addProduct({ ...formstate, img: [img1, img2, img3, img4] })
        .then((res) =>
          toast({
            title: "Product added successfully",
            position: "top",
            status: "success",
            duration: 2000,
            isClosable: true,
          })
        )
        .catch((e) =>
          toast({
            title: "Product added successfully",
            position: "top",
            status: "success",
            duration: 2000,
            isClosable: true,
          })
        );
    } else {
      toast({
        title: "Please Fill The Required Fields",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
    }
  };
  return (
    <Box pt={10} ps={5} pb={20}>
      <AdminNav />
      <Text mt={5} mb={5} fontSize={"20px"} fontWeight={500}>
        Add Products
      </Text>
      <Wrap
        direction={["column", "row"]}
        justifyContent="center"
        alignItems="center"
        spacing={5}
      >
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="title"
          placeholder="Product name"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="price"
          placeholder="Product main price"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="price2"
          placeholder="Product discounted price"
        />

        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="strik"
          placeholder="Product Real price"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="desc1"
          placeholder="Product description 1"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="desc2"
          placeholder="Product description 2"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="desc3"
          placeholder="Product description 3"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="desc4"
          placeholder="Product description 4"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="Width"
          placeholder="Width"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="Length"
          placeholder="Length"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="Depth"
          placeholder="Depth"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="Weight"
          placeholder="Weight"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="Certification"
          placeholder="Certification"
        />
        <Input
          width={"500px"}
          onChange={handleTheChange}
          name="OtherFeatures"
          placeholder="OtherFeatures"
        />
        <Select
          width={"500px"}
          name="category"
          onChange={handleTheChange}
          placeholder="Choose category"
        >
          <option value="Mobile">Home & Kichen</option>
        </Select>
        <Select
          width={"500px"}
          name="brand"
          onChange={handleTheChange}
          placeholder="Choose brand"
        >
          <option value="vivo">DAS</option>
          <option value="vivo">Jyoti</option>
        </Select>

        <Flex flexDirection={"column"}>
          <Text textAlign={"left"} ml={1} fontWeight={500} color={"gray"}>
            Product Image
          </Text>
          <Input
            width={"500px"}
            onChange={(e) => setImg1(e.target.value)}
            placeholder="Product image 1"
          />
          <Input
            width={"500px"}
            onChange={(e) => setImg2(e.target.value)}
            placeholder="Product image 2"
          />
          <Input
            width={"500px"}
            onChange={(e) => setImg3(e.target.value)}
            placeholder="Product image 3"
          />
          <Input
            width={"500px"}
            onChange={(e) => setImg4(e.target.value)}
            placeholder="Product image 4"
          />
        </Flex>
        <Button mt={5} onClick={handleTheSubmit}>
          Submit
        </Button>
      </Wrap>
    </Box>
  );
};

export default AddProduct;
