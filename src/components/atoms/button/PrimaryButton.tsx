import { Button } from '@chakra-ui/react';
import { memo, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
  loading?: boolean;
  disable?: boolean;
};

export const PrimaryButton: VFC<Props> = memo(
  ({ children, onClick, disable = false, loading = false }) => {
    return (
      <Button
        bg="blue.400"
        color="white"
        _hover={{ opacity: '0.4' }}
        isLoading={loading}
        disabled={disable || loading}
        onClick={onClick}
      >
        {children}
      </Button>
    );
  }
);
