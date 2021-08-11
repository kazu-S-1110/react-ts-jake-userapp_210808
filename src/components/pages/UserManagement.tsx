/* eslint-disable react-hooks/exhaustive-deps */
import { Center, Stack, Wrap } from '@chakra-ui/layout';
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spinner,
  useDisclosure,
  WrapItem,
} from '@chakra-ui/react';
import { memo, useCallback, useEffect, VFC } from 'react';
import { UserCard } from '../organisms/user/UserCard';
import { useAllUsers } from '../../hooks/useAllUsers';

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
      <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInRight">
        <ModalOverlay />
        <ModalContent pb="5">
          <ModalHeader>User Detail</ModalHeader>
          <ModalCloseButton />
          <ModalBody mx="5">
            <Stack spacing={5}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input value="hogehoge" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input value="hogehoge" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Mail</FormLabel>
                <Input value="hogehoge" isReadOnly />
              </FormControl>
              <FormControl>
                <FormLabel>Tel</FormLabel>
                <Input value="hogehoge" isReadOnly />
              </FormControl>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
});
