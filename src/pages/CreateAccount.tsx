import { Box } from "@chakra-ui/react";
import Register from "../components/Register";
import bg from "../assets/bg3.jpg"

const CreateAccount = () => {
  return (
    <Box bgImage={bg} bgRepeat={"no-repeat"} bgSize={"cover"} bgPos={"center"} h={"100vh"}>
      <Register />
    </Box>
  );
};

export default CreateAccount;
