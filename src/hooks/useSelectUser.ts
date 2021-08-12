import { useCallback, useState } from 'react';
import { User } from '../types/api/user';

type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectUser = () => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const onSelectUser = useCallback(({ id, users, onOpen }: Props) => {
    const targetUser = users.find((user) => user.id === id); // findで見つからないのでundefinedも含めてしまう。
    setSelectedUser(targetUser ?? null); //無い場合を想定してなかった場合はnullを返す記述
    // setSelectedUser(targetUser!)//アノテーションして絶対にあるよと明示的に宣言する記述。
    onOpen();
  }, []);
  return { onSelectUser, selectedUser };
};
