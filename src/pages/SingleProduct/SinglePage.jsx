import React, { useEffect, useState } from "react";
import { Box, Spinner, Text, useMediaQuery } from "@chakra-ui/react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { site } from "../../components/backend";
import LaptopScreen from "./LaptopScreen";
import MobileSinglepage from "./MobileSinglepage";
import Product from "./Product";

const getData = async (id) => {
  const res = await axios.get(`${site}/products/${id}`);
  return res.data;
};
const SinglePage = () => {
  const [isLargerThan1280] = useMediaQuery("(min-width: 720px)");
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleTheFetch = async () => {
    setLoading(true);
    const mobile = await getData(id);
    setData(mobile);
    setLoading(false);
  };

  useEffect(() => {
    handleTheFetch();
  }, []);

  return (
    <Box pt={10}>
      {loading && (
        <Box>
          <Spinner color="blue.500" w={20} h={20} mt={20} mb={10} />
          <Text fontWeight={600} color={"purple.400"} fontSize={"20px"}>
            Loading ...
          </Text>
        </Box>
      )}
      {!loading && isLargerThan1280 ? (
        <LaptopScreen data={data} />
      ) : (
        <MobileSinglepage data={data} />
      )}
      <Box>
        <Product data={data} /> {/* Pass data prop to Product component */}
      </Box>
    </Box>
  );
};


export default SinglePage;
