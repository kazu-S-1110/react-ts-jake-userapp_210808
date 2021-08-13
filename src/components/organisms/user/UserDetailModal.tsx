import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
} from '@chakra-ui/react';
import { ChangeEvent, memo, useEffect, useState, VFC } from 'react';
import { User } from '../../../types/api/user';
import { PrimaryButton } from '../../atoms/button/PrimaryButton';

type Props = {
  user: User | null;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: VFC<Props> = memo(
  ({ user, isOpen, isAdmin = false, onClose }) => {
    const onClickUpdate = () => {
      console.log();
    };
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
      setUsername(user?.username ?? '');
      setName(user?.name ?? '');
      setEmail(user?.email ?? '');
      setPhone(user?.phone ?? '');
    }, [user]);

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
                <Input
                  value={username}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUsername(e.target.value)
                  }
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  value={name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setName(e.target.value)
                  }
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Mail</FormLabel>
                <Input
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setEmail(e.target.value)
                  }
                  isReadOnly={!isAdmin}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Tel</FormLabel>
                <Input
                  value={phone}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPhone(e.target.value)
                  }
                  isReadOnly={!isAdmin}
                />
              </FormControl>
            </Stack>
          </ModalBody>
          {isAdmin && (
            <ModalFooter>
              <PrimaryButton onClick={onClickUpdate}>update</PrimaryButton>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    );
  }
);
