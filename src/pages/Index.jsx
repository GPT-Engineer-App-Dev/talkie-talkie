import React from "react";
import { Box, VStack, HStack, Avatar, Text, Input, Button, Divider, Heading, Spacer } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";

const conversations = [
  {
    id: 1,
    name: "John Doe",
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwNzAzMDR8MA&ixlib=rb-4.0.3&q=80&w=1080',
    lastMessage: "See you tomorrow!",
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwNzAzMDR8MA&ixlib=rb-4.0.3&q=80&w=1080',
    lastMessage: "Thanks for your help!",
  },
  {
    id: 3,
    name: "Bob Johnson",
    avatar: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjB3aXRoJTIwZ2xhc3NlcyUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMzA3MDMwNXww&ixlib=rb-4.0.3&q=80&w=1080',
    lastMessage: "I agree, let's do it.",
  },
];

const messages = [
  {
    id: 1,
    conversationId: 1,
    text: "Hey, how's it going?",
    fromMe: false,
  },
  {
    id: 2,
    conversationId: 1,
    text: "Great thanks! How about you?",
    fromMe: true,
  },
  {
    id: 3,
    conversationId: 1,
    text: "Doing well! See you at the meeting tomorrow?",
    fromMe: false,
  },
  {
    id: 4,
    conversationId: 1,
    text: "Yes, see you then!",
    fromMe: true,
  },
];

const Index = () => {
  const [selectedConversation, setSelectedConversation] = React.useState(conversations[0]);

  return (
    <HStack h="100vh" spacing={0}>
      <Box w="30%" bg="gray.50" p={4}>
        <VStack spacing={6} align="stretch">
          <HStack>
            <Avatar size="md" name="Dan Abrahmov" src="https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYW4lMjB3aXRoJTIwYmVhcmQlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwNzAzMDV8MA&ixlib=rb-4.0.3&q=80&w=1080" />
            <Text fontWeight="bold">My Name</Text>
          </HStack>
          <VStack spacing={4} align="stretch" overflowY="auto">
            {conversations.map((c) => (
              <HStack key={c.id} p={3} borderRadius="md" bg={c.id === selectedConversation.id ? "green.100" : "white"} _hover={{ bg: "gray.100", cursor: "pointer" }} onClick={() => setSelectedConversation(c)}>
                <Avatar size="sm" name={c.name} src={c.avatar} />
                <VStack align="start" spacing={0}>
                  <Text>{c.name}</Text>
                  <Text fontSize="sm" color="gray.500">
                    {c.lastMessage}
                  </Text>
                </VStack>
              </HStack>
            ))}
          </VStack>
        </VStack>
      </Box>

      <VStack w="70%" p={4} spacing={4} align="stretch">
        <HStack>
          <Avatar size="md" name={selectedConversation.name} src={selectedConversation.avatar} />
          <Heading size="lg">{selectedConversation.name}</Heading>
          <Spacer />
        </HStack>

        <Divider />

        <VStack spacing={3} align="stretch" overflowY="auto">
          {messages
            .filter((m) => m.conversationId === selectedConversation.id)
            .map((m) => (
              <HStack key={m.id} align={m.fromMe ? "end" : "start"} spacing={1}>
                {!m.fromMe && <Avatar size="sm" name={selectedConversation.name} src={selectedConversation.avatar} />}
                <Box bg={m.fromMe ? "green.100" : "gray.100"} p={2} borderRadius="md" maxW="60%">
                  <Text>{m.text}</Text>
                </Box>
                {m.fromMe && <FaCheck />}
              </HStack>
            ))}
        </VStack>

        <Divider />

        <HStack>
          <Input placeholder="Type a message" />
          <Button colorScheme="green">Send</Button>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default Index;
