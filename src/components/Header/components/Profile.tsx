import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center" pr="2rem">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Moisés Menezes</Text>
          <Text color="gray.300" fontSize="small">
            moisesmenezes90@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Moises Menezes"
        src="https://github.com/MoisesMenezes.png"
      />
    </Flex>
  );
}
