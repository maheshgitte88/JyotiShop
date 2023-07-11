import {
  Box,
  Button,
  Center,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  useToast,
  Modal,
  ModalBody,
  Tr,
  useDisclosure,
  Tfoot,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { site } from "../../components/backend";
import AddressCard, { getAddress } from "./AddressCard";
import AdminNav from "./AdminNav";

const order = async () => {
  let toki = localStorage.getItem("token");
  const res = await axios.get(`${site}/admin/orders`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  let data = res.data;
  return data;
};

const deleteProduct = async (id) => {
  let toki = localStorage.getItem("token");
  const res = await axios.delete(`${site}/admin/order/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: toki,
    },
  });
  const data = res.data;
  return data;
};

const Order = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [Id, setId] = useState("");
  const [ismodalOpen, setIsmodalOpen] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(order.status);
  const [orderDetails, setOrderDetails] = useState("");

  const togglePopup = (orderId) => {
    if (orderId === selectedOrderId) {
      setSelectedOrderId(null);
      localStorage.removeItem("selectedOrderId");
    } else {
      setSelectedOrderId(orderId);
      localStorage.setItem("selectedOrderId", orderId);
    }
  };
  const handleTogglePopup = (orderId) => {
    if (orderId === selectedOrderId) {
      setSelectedOrderId(null);
    } else {
      setSelectedOrderId(orderId);
  
    }
  };

  const handleStatusUpdate = async () => {
    try {
      const orderId = localStorage.getItem("selectedOrderId");
      const response = await axios.put(`${site}/admin/${orderId}`, {
        orderstatus: selectedStatus,
        orderdetals: orderDetails,
      });
      setOrderDetails(orderDetails);
      handleTheData();
    } catch (error) {
      console.error("Error updating order status:", error);
    }
  };
  const handleOpenModal = (selectedData) => {
    setSelectedData(selectedData);
    setIsmodalOpen(true);
  };
  const handleCloseModal = () => {
    setIsmodalOpen(false);
  };
  useEffect(() => {
    handleTheData();
  }, []);
  const handleTheData = async () => {
    setLoading(true);
    order().then((res) => setData(res));
    setLoading(false);
  };
  const handleTheDelete = async (id) => {
    deleteProduct(id)
      .then((res) =>
        toast({
          title: res,
          position: "top",
          status: "success",
          duration: 2000,
          isClosable: true,
        })
      )
      .catch((e) =>
        toast({
          title: e,
          position: "top",
          status: "warning",
          duration: 2000,
          isClosable: true,
        })
      );
    handleTheData();
  };
  const customStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    color: "#fffff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const customStyleone = {
    position: "relative",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "4px",
  };
  const customStylethree = {
    position: "absolute",
    top: "10px",
    right: "10px",
  };
  const hanldeTheAddress = (id) => {
    onOpen();
    setId(id);
  };
  const totalPrice = data.reduce(
    (total, product) => total + parseFloat(product.totalPrice),
    0
  );
  return (
    <Box pt={10}>
      <AdminNav />
      <Box>
        <Flex>
          <Box w={"80%"}>
            <Flex p={5} justifyContent={"center"}>
              <Box
                borderRadius={"10px"}
                background={
                  "url(https://img.freepik.com/premium-vector/abstract-blue-purple-gradient-color-background-website-banner-graphic-design_120819-729.jpg) center/cover no-repeat"
                }
                pt={3}
                h={140}
                w={200}
                bgColor={"gray.200"}
              >
                <Center>
                  <Box
                    borderRadius={"50%"}
                    background={
                      "url(https://media.istockphoto.com/id/1304090862/video/abstract-background.jpg?s=640x640&k=20&c=Jfb9RLrp8cUYX_6rmqUeItfqUCuLDT60NvwR8ZXBsTw=) center/cover no-repeat"
                    }
                    h={"60px"}
                    w={"60px"}
                  >

                  </Box>
                </Center>
                <Flex justifyContent={"center"} mt={1} p={2} gap={4}>
                  <Text color={"white"} fontSize={"18px"} fontWeight={500}>
                    Orders
                  </Text>
                  <Text color={"white"} fontSize={"18px"} fontWeight={500}>
                  ₹{" "}
                    {totalPrice
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </Text>
                </Flex>
              </Box>
            </Flex>
            <Flex overflow={"hidden"} ml={5} justifyContent={"center"}>
              <Box mt={"-100px"}></Box>
            </Flex>
          </Box>
        </Flex>
      </Box>

      {loading && (
        <Center mt={20} mb={20}>
          <Spinner
            mt={10}
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Text fontWeight={500} color={"rgb(107,70,193)"} mt={10}>
            Loading...
          </Text>
        </Center>
      )}
      <Box>
        <TableContainer>
          <Table size="sm">
            <Thead>
              {loading == false && (
                <Tr>
                  <Th>order ID & Product Name</Th>
                  <Th>name</Th>
                  <Th>date & Time</Th>
                  <Th>Details</Th>
                  <Th>Ordered Products</Th>
                  <Th>Total</Th>
                  <Th>Payment Status</Th>
                  <Th>Payment Details</Th>
                  <Th>Order Current Status</Th>
                  <Th>Chenge Order Status</Th>
                </Tr>
              )}
            </Thead>
            <Tbody>
              {data.length > 0 &&
                data.map((order, i) => (
                  <Tr key={i}>
                    <Td>
                      <Text
                        width={{ base: "100%", md: "180px", lg: "300px" }}
                        fontSize={{ base: "12px", md: "12px" }}
                        fontWeight={500}
                        borderColor={"green"}
                        overflow="hidden"
                        whiteSpace="nowrap"
                        textOverflow="ellipsis"
                      >
                        
                        {order.cart.map((e) => (
                          <div key={e.id}>{e.title}</div>
                        ))}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize={"12px"} fontWeight={"500"}>
                        {order.name}
                      </Text>
                    </Td>
                    <Td>
                      <Text
                        fontSize={"12px"}
                        width={"140px"}
                        overflow={"hidden"}
                        fontWeight={500}
                      >
                        {order.date}
                      </Text>
                    </Td>
                    <Td>
                      <Button
                        size={"sm"}
                        bgColor={"orange.300"}
                        _hover={{}}
                        color={"white"}
                        onClick={() => hanldeTheAddress(order._id)}
                       
                      >
                        <Text fontSize={"12px"}>Products & Address</Text>
                      </Button>
                      {/* Address  */}
                    </Td>
                    <Td>
                      <Button
                        ml={5}
                        onClick={() => handleTheDelete(order._id)}
                        size={"sm"}
                        bgColor={"orange.300"}
                        _hover={{}}
                        color={"white"}
                      >
                        <Text fontSize={"12px"}>Delete</Text>
                      </Button>
                    </Td>
                    <Td>
                      <Text fontSize={"12px"} fontWeight={500}>
                        ₹{" "}
                        {order.totalPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                      </Text>
                    </Td>
                    <Td>
                      <Text fontSize={"12px"} fontWeight={500}>
                        {order.resData.map((e) => (
                          <div>{e.status}</div>
                        ))}
                      </Text>
                    </Td>
                    <Td>
                      <Button
                        size={"sm"}
                        bgColor={"orange.300"}
                        _hover={{}}
                        color={"white"}
                        onClick={() => handleOpenModal(order)}
                      >
                        <Text fontSize={"12px"}>Payment Details</Text>
                      </Button>
                    </Td>
                    <Td>
                      <Text fontSize={"12px"} fontWeight={500}>
                        {order.orderstatus}
                      </Text>
                    </Td>
                    <Button
                      size="sm"
                      bgColor="orange.300"
                      _hover={{}}
                      color="white"
                      onClick={() => {
                        togglePopup(order._id);
                        handleTogglePopup(order.id);
                      }}
                    >
                      <Text fontSize="12px">Change Status</Text>
                    </Button>
                  </Tr>
                ))}
            </Tbody>

            {selectedOrderId === order.id && (
              <div style={customStyle}>
                <div style={customStyleone}>
                  <h3>Order Status</h3>
                  <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Enter Order Details"
                    value={orderDetails}
                    onChange={(e) => setOrderDetails(e.target.value)}
                  />
                  <Button
                    onClick={() => {
                      handleStatusUpdate();
                      togglePopup(order.id);
                    }}
                  >
                    Save Changes
                  </Button>
                  <button
                    style={customStylethree}
                    onClick={() => togglePopup(order.id)}
                  >
                    ❎
                  </button>
                </div>
              </div>
            )}

            {selectedData && (
              <Modal isOpen={ismodalOpen} onClose={handleCloseModal}>
                <ModalBody>
                  {selectedData.resData.map((item, index) => (
                    <div key={index} style={customStyle}>
                      <div style={customStyleone}>
                        <h3>Order Payment Details</h3>
                        <table>
                          <thead>
                            <tr>
                              <th>Order Id</th>
                              <th>Payment Id</th>
                              <th>Status</th>
                              <th>Time & Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <td>{item.orderId}</td>
                            <td>{item.paymentId}</td>
                            <td>{item.status}</td>
                            <td>{item.timestamp}</td>
                          </tbody>
                        </table>
                        <button
                          style={customStylethree}
                          onClick={handleCloseModal}
                        >
                          ❎
                        </button>
                      </div>
                    </div>
                  ))}
                </ModalBody>
              </Modal>
            )}

            {!loading && (
              <Tfoot>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th></Th>
                  <Th>Total:</Th>
                  <Th>
                    <Text fontSize={"12px"} fontWeight={500}>
                      ₹{" "}
                      {totalPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Text>
                  </Th>
                </Tr>
              </Tfoot>
            )}
          </Table>
        </TableContainer>
      </Box>
      <AddressCard
        id={Id}
        cancelRef={cancelRef}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default Order;
