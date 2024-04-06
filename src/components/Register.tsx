import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
  Select,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export interface User {
  name: string;
  email: string;
  age: string;
  gender: string;
  password: string;
  position: string;
  img: string;
  address: string;
}

const Register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [conPassword, setConPassword] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [img, setImg] = useState<string | ArrayBuffer | null | any>("");
  const [address, setAddress] = useState<string>("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImg(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSignup = async () => {
    try {
      const userData: User = {
        name,
        email,
        password,
        age,
        gender,
        position,
        img,
        address,
      };
      const storedUsers: User[] = JSON.parse(
        localStorage.getItem("users") || "[]"
      );

      if (
        name !== "" &&
        email !== "" &&
        password !== "" &&
        conPassword !== "" &&
        age !== "" &&
        gender !== "" &&
        position !== "" &&
        img !== "" &&
        address !== ""
      ) {
        if (password === conPassword) {
          const isEmailTaken = storedUsers.some((user) => user.email === email);

          if (!isEmailTaken) {
            storedUsers.push(userData);
            localStorage.setItem("users", JSON.stringify(storedUsers));

            toast({
              title: "Account created.",
              description: `Hello, ${name}! Your account has been created successfully.`,
              status: "success",
              duration: 5000,
              isClosable: true,
            });
            localStorage.setItem("currentUser", JSON.stringify(userData));
            navigate("/");
          } else {
            toast({
              title: "Email already exists!",
              description: `Hey, ${name}! This email is already registered. Please use a different email.`,
              status: "warning",
              duration: 5000,
              isClosable: true,
            });
          }
        } else {
          toast({
            title: "Password Mismatch!",
            description: `Hey, ${name}! Your password entries do not match.`,
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        }
      } else {
        toast({
          title: "Empty Field!",
          description: "Please fill in all fields.",
          status: "warning",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Registration Error!",
        description: `Hey, ${name}! An error occurred during registration.`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box fontFamily={"mono"} pt={28}>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          width="80%"
          p={6}
          background="rgba(255, 255, 255, 0.3)"
          backdropFilter="blur(10px)"
          borderRadius={"20px"}
          boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
          mt={7}
        >
          <Flex justify={"space-between"} gap={10}>
            <Flex w={"50%"} placeItems={"center"} justify={"center"}>
              <FormControl mb={4} isRequired width={"100%"}>
                <FormLabel fontWeight={"bold"} color={"white"} fontSize={"xl"}>
                  Image:-
                </FormLabel>
                <Flex direction={"column"} gap={2}>
                  {img && (
                    <Image
                      src={img}
                      alt="image_profile"
                      minW={"160px"}
                      maxW={"160px"}
                      borderRadius={"5px"}
                    />
                  )}
                  <Input
                    bg={"#fff"}
                    type="file"
                    onChange={handleImageChange}
                    w={"200px"}
                  />
                </Flex>
              </FormControl>
            </Flex>
            <Flex direction={"column"} w={"50%"}>
              <FormControl mb={4} isRequired>
                <FormLabel fontWeight={"bold"} color={"white"} fontSize={"xl"}>
                  Name:-
                </FormLabel>
                <Input
                  bg={"#fff"}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel fontWeight={"bold"} color={"white"} fontSize={"xl"}>
                  Email:-
                </FormLabel>
                <Input
                  bg={"#fff"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4} isRequired>
                <FormLabel fontWeight={"bold"} color={"white"} fontSize={"xl"}>
                  Age:-
                </FormLabel>
                <Input
                  bg={"#fff"}
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </FormControl>
            </Flex>
          </Flex>
          <Flex gap={10}>
            <FormControl mb={4} isRequired>
              <FormLabel fontWeight={"bold"} color={"white"} fontSize={"xl"}>
                Gender:-
              </FormLabel>
              <Select
                bg={"#fff"}
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
            <FormControl mb={4} isRequired>
              <FormLabel fontWeight={"bold"} color={"white"} fontSize={"xl"}>
                Position:-
              </FormLabel>
              <Select
                bg={"#fff"}
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              >
                <option value="intern">Intern</option>
                <option value="developer">Developer</option>
                <option value="stuff">Stuff</option>
                <option value="other">Other</option>
              </Select>
            </FormControl>
          </Flex>
          <FormControl mb={4} isRequired>
            <FormLabel fontWeight={"bold"} color={"white"} fontSize={"xl"}>
              Address:-
            </FormLabel>
            <Input
              bg={"#fff"}
              type="text"
              value={address}
              h={"100px"}
              onChange={(e) => setAddress(e.target.value)}
              fontSize={"2xl"}
            />
          </FormControl>
          <Flex gap={10}>
            <FormControl mb={4} isRequired>
              <FormLabel fontWeight={"bold"} color={"white"} fontSize={"xl"}>
                Password:-
              </FormLabel>
              <Input
                bg={"#fff"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <FormControl mb={6} isRequired>
              <FormLabel fontWeight={"bold"} color={"white"} fontSize={"xl"}>
                Password Again:-
              </FormLabel>
              <Input
                bg={"#fff"}
                type="password"
                value={conPassword}
                onChange={(e) => setConPassword(e.target.value)}
              />
            </FormControl>
          </Flex>
          <Button
            colorScheme={"pink"}
            size="lg"
            onClick={handleSignup}
            width="100%"
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
