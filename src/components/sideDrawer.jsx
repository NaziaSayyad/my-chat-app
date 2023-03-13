import { Box, Button, Input, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spinner, Text, Tooltip, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { ChatState } from '../Context/Chatprovider';

import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";

import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import axios from 'axios';
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons';
import ProfileModal from './ProfileModal';
import Chatloading from './chatloading';
import UserListItem from './UserAvatar/UserListItem';
function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { setSelectedChat, user, notification, setNotification, chats, setChats, } = ChatState();
  const name = user.user.name;
  const image = user.user.image
 
  console.log("search", search);
  
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const handleSearch = async () => {
    if (!search) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top-left",
      });
      return;
    }
    try {
      setLoading(true);

      const config = {
        headers: {
          Authorization: `${user.token}`,
        },
      };

      const  {data}  = await axios.get(`https://chat-backend-7c8v.onrender.com/api/user?search=${search}`, config);
      console.log("searched user",data);
      setLoading(false);
      setSearchResult(data);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: "Failed to Load the Search Results",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
    // alert("Token")
  };
const accessChat = async (userId) =>{
  try{
    setLoading(true);
    const config = {
      headers: {
        "Content-type":"application/json",
        Authorization:`${user.token}`,
      },
    };
    
    const { data } = await axios.post(`https://chat-backend-7c8v.onrender.com/api/chat`, { userId }, config);
    console.log("data",data);
    // if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data)
    setLoadingChat(false);
    onClose(); 

  }catch(error){
    toast({
      title: "Error fetching the chat",
      description: error.message,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
    // Eroorro jhjhadiu adkj jioiio kjf jfd hiu 
  }
};

  return (
    <>
    <Box
    display="flex"
    justifyContent='space-between'
    alignItems="center"
    bg="white"
    w="100%"
    p="5px 10px 5px 10px"
    borderWidth="5px"
  >
    <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="Work sans">
         My  Chat App 
        </Text>
        <div>
          {/* New Branch  */}
          <Menu>
            <MenuButton p={1}>
              {/* <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
              /> */}
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            {/* <MenuList></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton as={Button} 
            bg="white"
             rightIcon={<ChevronDownIcon  />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={name}
                src={image}
              />
            </MenuButton>
            <MenuList>
             
             <ProfileModal user = {user} > {" "}
             <MenuItem>My Profile</MenuItem>
             </ProfileModal>
              <MenuDivider />
              <MenuItem 
              // onClick={logoutHandler}
              >Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>  
  </Box>
  
  <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
    <DrawerBody>
      <Box display="flex" pb={2}>
        <Input
          placeholder="Search by name or email"
          mr={2}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch}>Go</Button>
      </Box>
     {
      loading? (
        <Chatloading /> 
      ) : (
        searchResult?.map((user) => (
          <UserListItem 
          users = {user}
          key={user._id}
          handleFunction = {() => accessChat(user._id)}
          />
          // console.log(user)
          ))
        
      )
     }
      {/* {loadingChat && <Spinner ml='auto' display='flex' />} */}
    </DrawerBody>
  </DrawerContent>
</Drawer>
  </>
  )
}

export default SideDrawer
