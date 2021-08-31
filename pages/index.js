import { Box, Button, Heading } from "@chakra-ui/react";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const { user, signin } = useAuth();
  // eslint-disable-next-line no-console
  console.log("user ", user);
  return (
    <Box bg="gray.100" w="100%" p={4}>
      <Heading as="h2" size="3xl" isTruncated>
        Aprenda programação direto ao ponto
      </Heading>
      <Button colorScheme="blue" onClick={() => signin()}>
        Entrar com github
      </Button>
    </Box>
  );
}
