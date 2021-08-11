import { Stack, Wrap, WrapItem } from '@chakra-ui/layout';
import { Box, Image, Text } from '@chakra-ui/react';
import { memo, VFC } from 'react';

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 5, md: 10 }}>
      <WrapItem>
        <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="2xl"
          shadow="md"
          p={4}
          _hover={{ cursor: 'pointer', opacity: '0.7' }}
        >
          <Stack textAlign="center">
            <Image
              borderRadius="full"
              boxSize="160px"
              src="https://source.unsplash.com/random"
              alt="profile img"
              m="auto"
            />
            <Text fontSize="lg" fontWeight="extrabold">
              Name
            </Text>
            <Text fontSize="md" color="gray.600">
              Sub Text
            </Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});
