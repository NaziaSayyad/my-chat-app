import { Box, Heading } from '@chakra-ui/react'
import React, { useState } from 'react'
import Chatbox from '../components/chatbox';
import Mychats from '../components/Mychats';
import SideDrawer from '../components/sideDrawer';
import { ChatState } from '../Context/Chatprovider';

function ChatPage() {
    const [fetchAgain, setFetchAgain] = useState(false);
    const { user } = ChatState();
  console.log("user",user);

    return (
      <div style={{ width: "100%" }}>
      { user && <SideDrawer /> }
        <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
          {user && <Mychats
           fetchAgain={fetchAgain} 
           />}
          {user && (
             <Chatbox 
             fetchAgain={fetchAgain} 
             setFetchAgain={setFetchAgain}
             /> 
         )} 
        </Box>
      </div>
    );
}

export default ChatPage
