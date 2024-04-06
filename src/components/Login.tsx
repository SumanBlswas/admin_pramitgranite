import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Divider,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const payload = {
      email,
      password,
    };
    try {
      if (email !== "" && password !== "") {
        const sendData = await axios.post(
          `http://localhost:8080/users/login`,
          payload
        );
        if (sendData.status === 200) {
          localStorage.setItem("token", sendData.data.token);
          axios.defaults.headers.common[
            "Authorization"
          ] = `${sendData.data.token}`;
          toast({
            title: "logged in Successfully.",
            description: `You have successfully logged in`,
            status: "success",
            duration: 9000,
            isClosable: true,
          });
          navigate("/");
        }
      } else {
        toast({
          title: "Empty Field.",
          description: `Check your Email and password before login`,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Wrong Credentials.",
        description: `Check your Email and password before login`,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={24} pt={5} className={"authorization_page"} h={"4xl"}>
      <Box display={"flex"} justifyContent={"center"} mt={20}>
        <Box
          width="350px"
          p={6}
          borderWidth="1px"
          borderRadius="md"
          boxShadow="lg"
          bg={"#fff"}
        >
          <Heading size="lg" mb={6}>
            Login
          </Heading>
          <FormControl mb={4}>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button
            className={"authorization_page"}
            colorScheme={"pink"}
            size="lg"
            onClick={handleLogin}
            width="100%"
          >
            Login
          </Button>
          <Divider my={6} />
          <Link to={"/register"}>
            <Text fontFamily={"mono"} textAlign={"center"}>
              Register Now!
            </Text>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
