import { Flex, Text, Box, Avatar } from '@chakra-ui/react';

interface PropfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: PropfileProps) {
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >
          <Text>Fernando Angiolin Vidal</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            fernandoangiolin.contato@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Fernando Angiolin Vidal"
      />
    </Flex>
  );
}