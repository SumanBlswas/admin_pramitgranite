import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoute from "./routes/AllRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Box position="absolute" w={"100%"}>
        <Navbar />
      </Box>
      <AllRoute />
    </Box>
  );
}

export default App;
