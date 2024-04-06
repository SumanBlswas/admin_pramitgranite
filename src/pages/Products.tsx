import { Box, Button, Flex, Input, Text, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

const Products = ({ setClicked }: { setClicked: CallableFunction }) => {
  const [title, setTitle] = useState("");
  const [brand, setBrand] = useState("");
  const [des, setDes] = useState("");
  const [img1, setImg1] = useState<any>();
  // const [url, setUrl] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [cat, setCat] = useState("");
  // const [loading, setLoading] = useState(false);
  const toast = useToast();

  const upload_image = (event) => {
    if (event.target.files && event.target.files.length) {
      setImg1(event.target.files[0]);
    }
  };

  const uploadImage = async () => {
    const data = new FormData();
    data.append("file", img1);
    data.append("upload_preset", "pramit");
    data.append("cloud_name", "drhiuv347");

    try {
      if (img1 === null) {
        return toast({
          title: "Product addition unsuccessful.",
          description: "Please upload the image first.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/drhiuv347/image/upload",
        data
      );

      const cloudData = await res.data;
      return cloudData.url;
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const url = await uploadImage();

    try {
      const formData = {
        title,
        brand,
        description: des,
        img1: url,
        size,
        price,
        rating,
        category: cat,
      };

      const data = await axios.post(
        "https://pramit-api.onrender.com/products/add",
        formData
      );

      console.log(data.data);

      toast({
        title: "Product added.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error adding product:", error);
      toast({
        title: "Product addition unsuccessful.",
        description: "Failed to add the product.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      // setLoading(false);
    }
  };

  console.log(img1);

  return (
    <Box className={"website_title"} mt={{ base: 8, sm: 0 }}>
      <Button
        onClick={() => setClicked(false)}
        position={{ base: "absolute", sm: "unset" }}
        top={{ base: "13%", sm: 0 }}
      >
        Back
      </Button>
      <Text
        color={"#fff"}
        p={5}
        pl={0}
        pr={{ base: 0, sm: 5 }}
        fontSize={"x-large"}
        textAlign={{ base: "right", sm: "left" }}
      >
        Product Management
      </Text>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex gap={10} direction={"column"}>
          <Flex
            justify={"space-between"}
            gap={3}
            direction={{ base: "column", sm: "row" }}
          >
            <Input
              placeholder={"Enter Title Here!"}
              color={"white"}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              placeholder={"Enter Brand Here!"}
              color={"white"}
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              required
            />
          </Flex>
          <Flex
            justify={"space-between"}
            gap={3}
            direction={{ base: "column", sm: "row" }}
          >
            <Input
              placeholder={"Enter Description Here!"}
              color={"white"}
              value={des}
              onChange={(e) => setDes(e.target.value)}
              h={{ base: "150px", sm: "200px" }}
              w={{ base: "100%", sm: "50%" }}
              required
            />

            <Flex
              justify={"space-between"}
              gap={3}
              direction={"column"}
              w={{ base: "100%", sm: "50%" }}
            >
              <Input
                placeholder={"Enter Image Here!"}
                color={"white"}
                type={"file"}
                accept="image/*"
                onChange={(e) => upload_image(e)}
                required
              />

              <Input
                placeholder={"Enter Size Here!"}
                color={"white"}
                value={size}
                onChange={(e) => setSize(e.target.value)}
                required
              />
              <Input
                placeholder={"Enter price Here!"}
                color={"white"}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </Flex>
          </Flex>
          <Flex justify={"space-between"} gap={3}>
            <Input
              placeholder={"Enter Rating Here!"}
              color={"white"}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
            <Input
              placeholder={"Enter Category Here!"}
              color={"white"}
              value={cat}
              onChange={(e) => setCat(e.target.value)}
              required
            />
          </Flex>
        </Flex>

        <Flex
          placeItems={"center"}
          justify={"center"}
          display={{ base: "flex", sm: "block" }}
        >
          <Button mt={5} type={"submit"}>
            Submit
          </Button>
        </Flex>
      </form>
    </Box>
  );
};

export default Products;
