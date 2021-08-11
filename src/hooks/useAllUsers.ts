/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useState, useCallback } from 'react';
import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>();
  const { showMessage } = useMessage();

  const getUsers = useCallback(() => {
    axios
      .get<Array<User>>('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch(() =>
        showMessage({ title: 'failed to get users', status: 'error' })
      )
      .finally(() => setLoading(false));
  }, []);
  return { getUsers, loading, users };
};
