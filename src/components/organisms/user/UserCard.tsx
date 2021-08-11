import { Box, Image, Stack, Text } from '@chakra-ui/react';
import { memo, VFC } from 'react';

type Props = {
  imageUrl: string;
  userName: string;
  fullName: string;
};

export const UserCard: VFC<Props> = memo(({ imageUrl, userName, fullName }) => {
  return (
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
          src={imageUrl}
          alt={userName}
          m="auto"
        />
        <Text fontSize="lg" fontWeight="extrabold">
          {userName}
        </Text>
        <Text fontSize="md" color="gray.600">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
