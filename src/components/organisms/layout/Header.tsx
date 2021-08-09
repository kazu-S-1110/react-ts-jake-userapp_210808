import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Heading, Link } from '@chakra-ui/layout';
import { memo, VFC } from 'react';

export const Header: VFC = memo(() => {
  return (
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
      />
    </Flex>
  );
});
