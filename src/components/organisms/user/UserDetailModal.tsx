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
  Stack,
} from '@chakra-ui/react';
import { memo, VFC } from 'react';
import { User } from '../../../types/api/user';

type Props = {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo(({ user, isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInRight">
      <ModalOverlay />
      <ModalContent pb="5">
        <ModalHeader>User Detail</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx="5">
          <Stack spacing={5}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input value={user?.username} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <Input value={user?.name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Mail</FormLabel>
              <Input value={user?.email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>Tel</FormLabel>
              <Input value={user?.phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
});
