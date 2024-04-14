import React from "react";
import { Box, VStack, Input, Button, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Signup = () => {
  return (
    <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <VStack spacing={4} p={8} borderWidth={1} borderRadius="md" boxShadow="md">
        <Input placeholder="Name" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="green" w="100%">
          Create Account
        </Button>
        <Text>
          Already have an account?{" "}
          <Link as={RouterLink} to="/login" color="green.500">
            Login
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default Signup;
