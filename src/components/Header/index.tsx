import { Flex } from "@chakra-ui/react";
import { Logo } from "./components/Logo/Logo";
import { Notification } from "./components/Logo/Notification";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      align="center"
      px="center"
    >
      <Logo />
      <Search />
      <Flex align="center" ml="auto">
        <Notification />
        <Profile />
      </Flex>
    </Flex>
  );
}
