import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./components/Logo/Logo";
import { Notification } from "./components/Logo/Notification";
import { Profile } from "./components/Profile";
import { Search } from "./components/Search";

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

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
      {!isWideVersion && (
        <IconButton
          aria-label="open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          ml="1"
        ></IconButton>
      )}

      <Logo />
      {isWideVersion && <Search />}
      <Flex align="center" ml="auto">
        <Notification />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
}
