/* eslint-disable react-hooks/exhaustive-deps */
import { useDisclosure } from '@chakra-ui/hooks';
import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import { memo, useCallback, VFC } from 'react';
import { useHistory } from 'react-router';
import { MenuIconButton } from '../../atoms/button/MenuIconButton';
import { MenuDrawer } from '../../morecules/MenuDrawer';

export const Header: VFC = memo(() => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const history = useHistory();
  const onClickHome = useCallback(() => history.push('/home'), []);
  const onClickUserManagement = useCallback(
    () => history.push('/home/user_management'),
    []
  );
  const onClickSetting = useCallback(() => history.push('/home/setting'), []);
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
        <Flex
          align="center"
          as="a"
          mr="8"
          _hover={{ cursor: 'pointer' }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: 'md', md: 'lg' }}>
            ユーザ管理アプリ
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
            <Link onClick={onClickUserManagement}>Users</Link>
          </Box>
          <Link onClick={onClickSetting}>Settings</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
