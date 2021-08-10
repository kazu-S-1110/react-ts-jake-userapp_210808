import { Button } from '@chakra-ui/button';
import { Input } from '@chakra-ui/input';
import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/layout';
import { memo, VFC } from 'react';

export const Login: VFC = memo(() => {
  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      <Box bg="white" w="sm" p="5" borderRadius="3xl" shadow="2xl">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザ管理アプリ
        </Heading>
        <Divider my="4" />
        <Stack spacing="5" py="4" px="10">
          <Input placeholder="User Id" />
          <Button bg="blue.400" color="white" _hover={{ opacity: '0.4' }}>
            Login
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
});
