import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/react';
import { memo, VFC } from 'react';

type Props = {
  onClose: () => void;
  isOpen: boolean;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
};

export const MenuDrawer: VFC<Props> = memo(
  ({ onClose, isOpen, onClickHome, onClickUserManagement, onClickSetting }) => {
    return (
      <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={5} bg="gray.100">
              <Button w="100%" my="3" onClick={onClickHome}>
                TOP
              </Button>
              <Button w="full" my="3" onClick={onClickUserManagement}>
                Users
              </Button>
              <Button w="full" my="3" onClick={onClickSetting}>
                Setting
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }
);
