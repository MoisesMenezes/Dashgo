import { Flex, Stack, Button } from "@chakra-ui/react";
import Input from "../components/Form/Input";

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack>
          <Input type="email" name="email" label="E-mail" />
          <Input type="password" name="password" label="Password" />
        </Stack>
        <Button mt="6" type="submit" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
