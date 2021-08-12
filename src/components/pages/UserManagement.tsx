/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Wrap } from '@chakra-ui/layout';
import { Spinner, useDisclosure, WrapItem } from '@chakra-ui/react';
import { memo, useCallback, useEffect, VFC } from 'react';
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../organisms/user/UserDetailModal';

export const UserManagement: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  useEffect(() => getUsers(), []);
  const onClickUser = useCallback(() => onOpen(), []);
  return (
    <>
      {loading ? (
        <Center h="100vh">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="white"
            color="blue.500"
            size="xl"
          />
        </Center>
      ) : (
        <Wrap p={{ base: 5, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx="auto">
              <UserCard
                userName={user.username}
                fullName={user.name}
                imageUrl="https://source.unsplash.com/random"
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal isOpen={isOpen} onClose={onClose} />
    </>
  );
});
