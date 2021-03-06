import { useToast } from '@chakra-ui/toast';
import { useCallback } from 'react';

type Props = {
  title: string;
  status: 'info' | 'warning' | 'success' | 'error';
};

export const useMessage = () => {
  const toast = useToast();
  const showMessage = useCallback(
    ({ title, status }: Props) => {
      toast({
        title,
        status,
        position: 'bottom-left',
        duration: 2000, //継続時間
        isClosable: false,
      });
    },
    [toast]
  );
  return { showMessage };
};
