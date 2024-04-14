import React from "react";
import { Box, VStack, Input, Button, Text, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Login = () => {
  return (
    <Box w="100vw" h="100vh" display="flex" justifyContent="center" alignItems="center">
      <VStack spacing={4} p={8} borderWidth={1} borderRadius="md" boxShadow="md">
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Button colorScheme="green" w="100%">
          Login
        </Button>
        <Text>
          Don't have an account?{" "}
          <Link as={RouterLink} to="/signup" color="green.500">
            Sign Up
          </Link>
        </Text>
        <Link as={RouterLink} to="/forgot-password" color="gray.500" fontSize="sm">
          Forgot Password?
        </Link>
      </VStack>
    </Box>
  );
};

export default Login;
