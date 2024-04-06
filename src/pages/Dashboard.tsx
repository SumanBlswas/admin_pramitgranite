import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import avatar from "../assets/bg.jpg";
import { MdSpaceDashboard } from "react-icons/md";
import { TbNotebook } from "react-icons/tb";
import { IoCalendarNumber } from "react-icons/io5";
import { LuSettings2 } from "react-icons/lu";
import { MdDarkMode } from "react-icons/md";
import { GoBell, GoSearch } from "react-icons/go";
import admin from "../assets/Admin.jpg";
import product from "../assets/Cart.jpg";
import stuff from "../assets/Stuff.jpg";
import user from "../assets/User.jpg";
import help from "../assets/Help.jpg";
import Products from "./Products";
import { useState } from "react";

const Dashboard = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <Box bg={"#5e6872"} h={"100vh"} p={{ base: 3, sm: 32 }}>
      <Flex
        bg={"#242529"}
        p={10}
        borderRadius={"30px"}
        h={"full"}
        placeItems={"start"}
        justify={"space-between"}
        gap={10}
      >
        <Flex
          direction={"column"}
          placeItems={"center"}
          w={"10%"}
          justify={"space-between"}
          h={"full"}
          display={{ base: "none", sm: "flex" }}
        >
          <Flex placeItems={"center"} gap={10} direction={"column"}>
            <Flex
              color={"#fff"}
              direction={"column"}
              placeItems={"center"}
              gap={2}
            >
              <Avatar src={avatar} title="Avatar" size={"lg"} />
              <Text
                fontWeight={"bold"}
                fontSize={"small"}
                className={"website_title"}
              >
                Prantho Barik
              </Text>
              <Text
                border={"1px solid white"}
                p={1}
                borderRadius={20}
                pl={5}
                pr={5}
              >
                Edit
              </Text>
            </Flex>
            <Flex
              color={"#fff"}
              className={"tag_line"}
              direction={"column"}
              placeItems={"left"}
              gap={5}
            >
              <Flex placeItems={"center"} gap={2}>
                <Text fontSize={"xl"}>
                  <MdSpaceDashboard />
                </Text>
                <Text>Dashboard</Text>
              </Flex>
              <Flex placeItems={"center"} gap={2}>
                <Text fontSize={"xl"}>
                  <TbNotebook />
                </Text>
                <Text>Activity</Text>
              </Flex>
              <Flex placeItems={"center"} gap={2}>
                <Text fontSize={"xl"}>
                  <IoCalendarNumber />
                </Text>
                <Text>Schedule</Text>
              </Flex>
              <Flex placeItems={"center"} gap={2}>
                <Text fontSize={"xl"}>
                  <LuSettings2 />
                </Text>
                <Text>Settings</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            placeItems={"center"}
            gap={2}
            color={"#fff"}
            fontSize={"md"}
            className={"website_title"}
          >
            <Text>Light</Text>
            <MdDarkMode />
            <Text>Dark</Text>
          </Flex>
        </Flex>
        <Divider
          orientation={"vertical"}
          display={{ base: "none", sm: "block" }}
        />
        {clicked ? (
          <Flex w={"100%"} direction={"column"} gap={8}>
            <Products setClicked={setClicked} />
          </Flex>
        ) : (
          <Flex w={{ base: "100%", sm: "90%" }} direction={"column"} gap={10}>
            <Flex
              w={"full"}
              justify={"space-between"}
              placeItems={"center"}
              color={"#fff"}
              className="website_title"
              display={{ base: "none", sm: "flex" }}
            >
              <Text fontSize={"2xl"}>Statictics</Text>
              <Flex placeItems={"center"} gap={2}>
                <Text fontSize={"xl"}>
                  <GoSearch />
                </Text>
                <Input border={"none"} placeholder={"Seacrh something..."} />
              </Flex>
              <Flex placeItems={"center"} gap={3}>
                <Button colorScheme="yellow">
                  <Text fontSize={"sm"}>Upgrade</Text>
                </Button>
                <Button
                  variant={"outline"}
                  color={"#fff"}
                  borderRadius={"10px"}
                  _hover={{ bgColor: "none" }}
                >
                  <Text>
                    <GoBell />
                  </Text>
                </Button>
              </Flex>
            </Flex>
            <Flex
              placeItems={"center"}
              className={"contact_button"}
              fontSize={"xl"}
              fontWeight={"semibold"}
              gap={5}
              direction={{ base: "column", sm: "row" }}
              mt={{ base: 20, sm: 0 }}
            >
              <Flex
                bg={"#ffe6a6"}
                direction={{ base: "row", sm: "column" }}
                placeItems={"center"}
                borderRadius={{ base: "8px", sm: "20px" }}
                pb={{ base: 0, sm: 2 }}
                p={{ base: 2, sm: 0 }}
                pr={{ base: 4, sm: 0 }}
                w={{ base: "100%", sm: "auto" }}
                h={{ base: "50%", sm: "auto" }}
                justify={{ base: "space-between", sm: "space-around" }}
              >
                <Image
                  src={admin}
                  w={{ base: "50px", sm: "auto" }}
                  alt="admin"
                  borderRadius={"20px"}
                />
                <Text>Admin Management</Text>
              </Flex>
              <Flex
                bg={"#d9c1ff"}
                direction={{ base: "row", sm: "column" }}
                placeItems={"center"}
                borderRadius={{ base: "8px", sm: "20px" }}
                pb={{ base: 0, sm: 2 }}
                p={{ base: 2, sm: 0 }}
                pr={{ base: 4, sm: 0 }}
                w={{ base: "100%", sm: "auto" }}
                h={{ base: "50%", sm: "auto" }}
                justify={{ base: "space-between", sm: "space-around" }}
                onClick={() => setClicked(true)}
              >
                <Image
                  src={product}
                  alt="admin"
                  borderRadius={"20px"}
                  w={{ base: "60px", sm: "70%" }}
                />
                <Text>Product Management</Text>
              </Flex>
              <Flex
                bg={"#ffe8cc"}
                direction={{ base: "row", sm: "column" }}
                placeItems={"center"}
                borderRadius={{ base: "8px", sm: "20px" }}
                pb={{ base: 0, sm: 2 }}
                p={{ base: 2, sm: 0 }}
                pr={{ base: 4, sm: 0 }}
                w={{ base: "100%", sm: "auto" }}
                h={{ base: "50%", sm: "auto" }}
                justify={{ base: "space-between", sm: "space-around" }}
              >
                <Image
                  src={stuff}
                  alt="admin"
                  borderRadius={"20px"}
                  w={{ base: "70px", sm: "140%" }}
                  p={{base:0, sm: 16}}
                />
                <Text>Stuff Management</Text>
              </Flex>
              <Flex
                bg={{ base: "#a9d2fe", sm: "#ffe6a6" }}
                direction={{ base: "row", sm: "column" }}
                placeItems={"center"}
                borderRadius={{ base: "8px", sm: "20px" }}
                pb={{ base: 0, sm: 2 }}
                p={{ base: 2, sm: 0 }}
                pr={{ base: 4, sm: 0 }}
                w={{ base: "100%", sm: "auto" }}
                h={{ base: "50%", sm: "auto" }}
                justify={{ base: "space-between", sm: "space-around" }}
              >
                <Image
                  src={user}
                  alt="admin"
                  w={{ base: "50px", sm: "auto" }}
                  borderRadius={"20px"}
                />
                <Text>User Management</Text>
              </Flex>
            </Flex>
            <Flex
              placeItems={"center"}
              className={"contact_button"}
              fontSize={"xl"}
              fontWeight={"semibold"}
              gap={5}
              direction={{ base: "column", sm: "row" }}
            >
              <Flex
                bg={{ base: "#4a91e1", sm: "#ffe6a6" }}
                direction={{ base: "row", sm: "column" }}
                placeItems={"center"}
                borderRadius={{ base: "8px", sm: "20px" }}
                pb={{ base: 0, sm: 2 }}
                p={{ base: 2, sm: 0 }}
                pr={{ base: 4, sm: 0 }}
                w={{ base: "100%", sm: "auto" }}
                h={{ base: "100%", sm: "auto" }}
                justify={{ base: "space-between", sm: "space-around" }}
              >
                <Image
                  src={help}
                  w={{ base: "50px", sm: "auto" }}
                  alt="admin"
                  borderRadius={"20px"}
                />
                <Text>Help Desk Centre</Text>
              </Flex>
              <Flex
                bg={"#d9c1ff"}
                direction={{ base: "row", sm: "column" }}
                placeItems={"center"}
                borderRadius={{ base: "8px", sm: "20px" }}
                pb={{ base: 0, sm: 2 }}
                p={{ base: 2, sm: 0 }}
                pr={{ base: 4, sm: 0 }}
                w={{ base: "100%", sm: "auto" }}
                h={{ base: "50%", sm: "auto" }}
                justify={{ base: "space-between", sm: "space-around" }}
                onClick={() => setClicked(true)}
              >
                <Image
                  src={product}
                  alt="admin"
                  borderRadius={"20px"}
                  w={{ base: "60px", sm: "70%" }}
                />
                <Text>Product Management</Text>
              </Flex>
              <Flex
                bg={"#ffe8cc"}
                direction={{ base: "row", sm: "column" }}
                placeItems={"center"}
                borderRadius={{ base: "8px", sm: "20px" }}
                pb={{ base: 0, sm: 2 }}
                p={{ base: 2, sm: 0 }}
                pr={{ base: 4, sm: 0 }}
                w={{ base: "100%", sm: "auto" }}
                h={{ base: "50%", sm: "auto" }}
                justify={{ base: "space-between", sm: "space-around" }}
              >
                <Image
                  src={stuff}
                  alt="admin"
                  borderRadius={"20px"}
                  w={{ base: "70px", sm: "auto" }}
                  p={{ base: 0, sm: 16 }}
                />
                <Text>Stuff Management</Text>
              </Flex>
              <Flex
                bg={{ base: "#a9d2fe", sm: "#ffe6a6" }}
                direction={{ base: "row", sm: "column" }}
                placeItems={"center"}
                borderRadius={{ base: "8px", sm: "20px" }}
                pb={{ base: 0, sm: 2 }}
                p={{ base: 2, sm: 0 }}
                pr={{ base: 4, sm: 0 }}
                w={{ base: "100%", sm: "auto" }}
                h={{ base: "50%", sm: "auto" }}
                justify={{ base: "space-between", sm: "space-around" }}
              >
                <Image
                  src={user}
                  alt="admin"
                  w={{ base: "50px", sm: "auto" }}
                  borderRadius={"20px"}
                />
                <Text>User Management</Text>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Dashboard;
