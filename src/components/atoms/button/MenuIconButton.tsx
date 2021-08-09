import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon } from '@chakra-ui/icons';
import { memo, VFC } from 'react';

type Props = {
  onOpen: () => void;
};

export const MenuIconButton: VFC<Props> = memo(({ onOpen }) => {
  return (
    <IconButton
      aria-label="menu_button"
      icon={<HamburgerIcon />}
      size="sm"
      variant="unstyled"
      // スマホの時はこのタグを表示するコード
      display={{ base: 'block', md: 'none' }}
      onClick={onOpen}
    />
  );
});
