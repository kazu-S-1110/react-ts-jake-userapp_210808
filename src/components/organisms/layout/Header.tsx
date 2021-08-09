import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import { memo, VFC } from 'react';
import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../morecules/MenuDrawer';

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
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer onClose={onClose} isOpen={isOpen} />
    </>
  );
});
