import {
    Box,
    Container,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
  } from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Login from "../Authentication/Login";
import Signup from "../Authentication/Signup";

function Home() {
  const history = useHistory()


  useEffect(() =>{
  const user = JSON.parse(localStorage.getItem("userInfo"));
  if(user) history.push("/chat"); 
}, []);

  return (
    <Container maxW="xl" centerContent>
    
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" m={'5%'}>
      <Tabs isFitted variant="soft-rounded">
        <TabList mb="1em">
          <Tab>Login</Tab>
          <Tab>Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Signup />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Container>
  )
}

export default Home
