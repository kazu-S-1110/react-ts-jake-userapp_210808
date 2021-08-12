/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Wrap } from '@chakra-ui/layout';
import { Spinner, useDisclosure, WrapItem } from '@chakra-ui/react';
import { memo, useCallback, useEffect, VFC } from 'react';
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';
import { UserDetailModal } from '../organisms/user/UserDetailModal';
import { useSelectUser } from '../../hooks/useSelectUser';

export const UserManagement: VFC = memo(() => {
  const { onSelectUser, selectedUser } = useSelectUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, loading, users } = useAllUsers();
  useEffect(() => getUsers(), []);
  const onClickUser = useCallback(
    (id: number) => {
      // console.log(id);
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen] //初期状態のまま関数を渡してしまっているので再読み込みさせたいトリガーを設定する
  );
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
        <Wrap p={{ base: 5, md: 10 }} justify="center">
          {users.map((user) => (
            <WrapItem key={user.id}>
              <UserCard
                id={user.id}
                userName={user.username}
                fullName={user.name}
                imageUrl="https://source.unsplash.com/random"
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal user={selectedUser} isOpen={isOpen} onClose={onClose} />
    </>
  );
});
