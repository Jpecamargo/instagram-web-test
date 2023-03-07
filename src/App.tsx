import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import InstagramApi from "./functions/instagram-api";

function App() {
  return (
    <Flex align={"center"} justify={"center"} h={"100vh"} direction={'column'}>
      <Text fontSize={"3xl"}>Hello world!</Text>
      <Button onClick={() => {InstagramApi()}}>Instagram</Button>
    </Flex>
  );
}

export default App;
