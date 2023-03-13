import { Avatar, Box, Text } from '@chakra-ui/react';
import React from 'react'

function UserListItem({ users, handleFunction }) {
  console.log(users,"userss");

  return (
      <Box
        onClick={handleFunction}
        cursor="pointer"
        bg="#E8E8E8"
        _hover={{
          background: "#38B2AC",
          color: "white",
        }}
        w="100%"
        d="flex"
        alignItems="center"
        color="black"
        px={3}
        py={2}
        mb={2}
        borderRadius="lg"
      >
        <Avatar
          mr={2}
          size="sm"
          cursor="pointer"
          name={users.name}
          src={users.image}
        />
        <Box>
          <Text> {users.name} </Text>
          <Text fontSize="xs">
            <b>Email : </b>
            {users.email}
          </Text>
        </Box>
      </Box>
    
  )
}

export default UserListItem
