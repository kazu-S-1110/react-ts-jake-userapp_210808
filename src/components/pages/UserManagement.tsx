import { Stack, Wrap, WrapItem } from '@chakra-ui/layout';
import { Box, Image, Text } from '@chakra-ui/react';
import { memo, VFC } from 'react';
import { UserCard } from '../organisms/user/UserCard';

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 5, md: 10 }}>
      <WrapItem>
        <UserCard
          userName="Name"
          fullName="fullName"
          imageUrl="https://source.unsplash.com/random"
        />
      </WrapItem>
    </Wrap>
  );
});
