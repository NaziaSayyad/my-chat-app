import { Box } from "@chakra-ui/layout";

// import SingleChat from "./SingleChat";
import { ChatState } from "../Context/Chatprovider";
// import { ChatState } from "../Context/ChatProvider";

const Chatbox = () =>{
// ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="white"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
    >
      Chatbox
    </Box>
  );
};

export default Chatbox;
