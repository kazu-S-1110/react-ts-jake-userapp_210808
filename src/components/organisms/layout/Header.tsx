import { Button, IconButton } from '@chakra-ui/button';
import { useDisclosure } from '@chakra-ui/hooks';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from '@chakra-ui/modal';
import { memo, VFC } from 'react';

export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="gray.50"
        alignItems="center"
        justifyContent="space-between"
        padding={{ base: '3', md: '5' }}
      >
        <Flex align="center" as="a" mr="8" _hover={{ cursor: 'pointer' }}>
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            hogehoge
          </Heading>
        </Flex>
        <Flex
          alignItems="center"
          fontSize="sm"
          flexGrow={2}
          // chakrauiのレスポンシブ対応は以下のようにすると良い
          display={{ base: 'none', md: 'flex' }}
        >
          <Box pr="4">
            <Link>Users</Link>
          </Box>
          <Link>Settings</Link>
        </Flex>
        <IconButton
          aria-label="menu_button"
          icon={<HamburgerIcon />}
          size="sm"
          variant="unstyled"
          // スマホの時はこのタグを表示するコード
          display={{ base: 'block', md: 'none' }}
          onClick={onOpen}
        />
      </Flex>
      <Drawer placement="right" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody p={0} bg="gray.100">
              <Button w="100%" my="3">
                TOP
              </Button>
              <Button w="full" my="3">
                Users
              </Button>
              <Button w="full" my="3">
                Setting
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
});
