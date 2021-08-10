/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import { User } from '../types/api/user';
import { useMessage } from './useMessage';

export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            showMessage({ title: 'Success login!', status: 'success' });
            history.push('/home');
          } else {
            showMessage({ title: "Don't find user!", status: 'error' });
          }
        })
        .catch(() => showMessage({ title: "Can't login", status: 'error' }))
        .finally(() => setLoading(false));
    },
    [showMessage]
  );

  return { login, loading };
};
