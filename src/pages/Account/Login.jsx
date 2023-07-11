import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Icon,
  useColorModeValue,
  InputRightElement,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { BsFillEyeSlashFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/auth.action";
import "./YourComponent.css";
const initState = {
  email: "",
  password: "",
};
const Login = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const [msg, setMsg] = useState("");
  const [formstate, setFormstate] = useState(initState);
  const { isAuth, token } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toast = useToast();
  useEffect(() => {
    if (isAuth) {
      toast({
        title: "Login successfully",
        position: "top",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      navigate("/");
    }
  }, [isAuth]);

  const handleTheChange = (e) => {
    setFormstate({ ...formstate, [e.target.name]: e.target.value });
  };
  const handleTheSubmit = ({ isAuth }) => {
    dispatch(login(formstate));
  };
  return (
    <Flex
    minH={"100vh"}
    align={"center"}
    justify={"center"}
    bg={useColorModeValue("gray.50", "gray.800")}
  >
    <Stack spacing={8} maxW={"xl"} py={6} px={6} w="full">
      <Stack align={"center"}>
        <Heading fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}>
          Login to your account
        </Heading>
      </Stack>
      <Box
        rounded={"lg"}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow={"lg"}
        p={8}
        // maxW={{ base: "sm", sm: "md", md: "lg"  }}
        w="full"
      >
        <Stack spacing={12}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input size="xl"  placeholder="Email" name="email" onChange={handleTheChange} type="email" />
          </FormControl>
          {/* Password  */}
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <InputGroup size="xl">
              <Input
                name="password"
                onChange={handleTheChange}
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
              />
              <InputRightElement>
                <Button _hover={{}} bg={"none"} size="xl" onClick={handleClick}>
                  {show ? (
                    <Icon
                      color={"rgb(107,70,193)"}
                      as={BsFillEyeSlashFill}
                      boxSize={4}
                    />
                  ) : (
                    <Icon
                      color={"rgb(107,70,193)"}
                      as={BsFillEyeFill}
                      boxSize={4}
                    />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
  
          <Stack spacing={4}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"rgb(107,70,193)"}>Forgot password?</Link>
            </Stack>
            <Button
              bg={"rgb(107,70,193)"}
              color={"white"}
              _hover={{
                bg: "rgb(107,70,193)",
              }}
              onClick={handleTheSubmit}
            >
              Login
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
  
  );
};

export default Login;
