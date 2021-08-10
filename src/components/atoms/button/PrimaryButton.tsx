import { Button } from '@chakra-ui/react';
import { memo, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo(({ children }) => {
  return (
    <Button bg="blue.400" color="white" _hover={{ opacity: '0.4' }}>
      {children}
    </Button>
  );
});
