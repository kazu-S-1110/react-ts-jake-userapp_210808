import { Input } from '@chakra-ui/input';
import { Box, Divider, Flex, Heading, Stack } from '@chakra-ui/layout';
import { ChangeEvent, memo, useState, VFC } from 'react';
import { PrimaryButton } from '../atoms/button/PrimaryButton';

export const Login: VFC = memo(() => {
  const [userId, setUserId] = useState('');
  const onChangeUserID = (e: ChangeEvent<HTMLInputElement>) =>
    setUserId(e.target.value);

  return (
    <Flex alignItems="center" justifyContent="center" h="100vh">
      <Box bg="white" w="sm" p="5" borderRadius="3xl" shadow="2xl">
        <Heading as="h1" size="lg" textAlign="center">
          ユーザ管理アプリ
        </Heading>
        <Divider my="4" />
        <Stack spacing="5" py="4" px="10">
          <Input
            placeholder="User ID"
            value={userId}
            onChange={onChangeUserID}
          />
          <PrimaryButton>Login</PrimaryButton>
        </Stack>
      </Box>
    </Flex>
  );
});
