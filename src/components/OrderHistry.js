import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { site } from './backend';
// import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { Flex, Box, Text, Image, Button } from "@chakra-ui/react";

const OrderHistory = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [data, setData] = useState([]);
  const togglePopup = (order) => {
    setSelectedOrder(order);
  };
  const customStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    color: '#fffff',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  };
  const customStyleone = {
    position: 'relative',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '4px',
  };
  const customStylethree = {
    position: 'absolute',
    top: '10px',
    right: '10px'
  };
  const getOrderHistory = async () => {
    let tokenone = localStorage.getItem("token");
    const decodedToken = jwt_decode(tokenone);
    const id = decodedToken.id;
    try {
      const response = await axios.get(`${site}/admin/carts/${id}`);
      const orderHistory = response.data;
      setData(orderHistory);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getOrderHistory();
  }, []);

  return (
    <div>
      <Flex direction="column" alignItems="center">
        {data.map((order) => (
          <Flex
            key={order._id}
            borderWidth="1px"
            borderRadius="md"
            p={4}
            flexDirection={["column", "row"]}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            mb={4}
          >
            <Box>
              <Text fontWeight="bold" mb={2} textAlign={["center", "start"]}>
                {order.cart[0].title}
              </Text>
              <Text textAlign={["center", "end"]}>{order.resData[0].timestamp}</Text>
            </Box>
            <Box
              order={[2, 1]}
              mr={[0, 4]}
              mb={[4, 0]}
              width={["100%", "auto"]}
              textAlign={["center", "start"]}
            >
              <Image
                src={order.cart[0].img[0]}
                alt="Product"
                width="100px"
                height="100px"
              />
              <Button color={'green.500'} onClick={() => togglePopup(order)}>All Details</Button>
            </Box>
            <Box
              order={[1, 2]}
              display="flex"
              flexDirection="column"
              textAlign={["center", "start"]}
            >
              <Text mb={2}>Total Price: ₹ {order.totalPrice}</Text>
              <Text
                color={order.resData[0].status === "success" ? "green.500" : "red.500"}
              >
                Status: {order.resData[0].status}
              </Text>
            </Box>
          </Flex>
        ))}
      </Flex>
      {selectedOrder && (
        <div style={customStyle} >
          <div style={customStyleone}>
            <h3>Ordar Address & Contact Details</h3>
            <table>
              <thead>
                <tr>
                  {/* <th>Name</th> */}
                  <th>Pin Code</th>
                  <th>House No</th>
                  {/* <th>Landmark</th> */}
                  <th>State</th>
                  <th>Mobile No</th>
                </tr>
              </thead>
              <tbody>
                {/* <td>{selectedOrder.name}</td> */}
                <td>{selectedOrder.pinCode}</td>
                <td>{selectedOrder.houseNo}</td>
                {/* <td>{selectedOrder.landmark}</td> */}
                <td>{selectedOrder.state}</td>
                <td>{selectedOrder.mobileNumber}</td>
              </tbody>
            </table>
            <button style={customStylethree} onClick={() => setSelectedOrder(null)}>
              ❎
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
