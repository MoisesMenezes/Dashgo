import { Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Notification } from "./Notification";
import { Profile } from "./Profile";
import { Search } from "./Search";

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
