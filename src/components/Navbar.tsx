import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  useMediaQuery,
  IconButton,
  VStack,
  Collapse,
} from "@chakra-ui/react";
import { FaAlignCenter } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Box
      m={5}
      ml={5}
      mr={5}
      background="rgba(255, 255, 255, 0.5)"
      backdropFilter="blur(10px)"
      borderRadius="full"
      p={2}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
      pl={4}
      pr={4}
      pt={3}
      pb={3}
      border="0.5px solid #fff"
      position="relative"
      zIndex={1}
    >
      <Flex justify="space-between" align="center">
        <Text
          fontWeight="bold"
          fontSize={isLargerThan768 ? "2xl" : "xl"}
          className="website_title"
          cursor="pointer"
          onClick={() => navigate("/")}
        >
          Pramit Granite
        </Text>
        <Flex align="center">
          {!isLargerThan768 && (
            <IconButton
              icon={!isMenuOpen ? <FaAlignCenter /> : <GiCrossedBones />}
              aria-label="Open Menu"
              onClick={handleMenuClick}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              mr={2}
            />
          )}
          {isLargerThan768 ? (
            <Flex
              placeItems="center"
              fontWeight="bold"
              fontSize="lg"
              gap={5}
              className="nav_links"
            >
              <Text cursor="pointer" onClick={() => navigate("/")}>
                Home
              </Text>
              <Text cursor="pointer" onClick={() => navigate("/products")}>
                Products
              </Text>
              <Text cursor="pointer" onClick={() => navigate("/about")}>
                About Us
              </Text>
              <Text cursor="pointer" onClick={() => navigate("/resources")}>
                Resources
              </Text>
            </Flex>
          ) : (
            <Collapse in={isMenuOpen} animateOpacity>
              <VStack
                spacing={4}
                align="stretch"
                p={4}
                bg="rgba(255, 255, 255)"
                borderRadius="md"
                position="fixed"
                top="60px"
                left="0"
                right="0"
                zIndex="1"
                mt={5}
              >
                <Text cursor="pointer" onClick={() => navigate("/")}>
                  Home
                </Text>
                <Text cursor="pointer" onClick={() => navigate("/products")}>
                  Products
                </Text>
                <Text cursor="pointer" onClick={() => navigate("/about")}>
                  About Us
                </Text>
                <Text cursor="pointer" onClick={() => navigate("/resources")}>
                  Resources
                </Text>
                <Button
                  bg="#e4fdbf"
                  borderRadius="full"
                  fontSize="xl"
                  p={4}
                  color="black"
                  className="contact_button"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </Button>
              </VStack>
            </Collapse>
          )}
          {isLargerThan768 && (
            <Button
              bg="#e4fdbf"
              borderRadius="full"
              fontSize="xl"
              p={4}
              ml={5}
              color="black"
              className="contact_button"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </Button>
          )}
        </Flex>
      </Flex>
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background="linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0) 100%)"
        zIndex="-1"
        borderRadius="full"
      ></Box>
    </Box>
  );
};

export default Navbar;
