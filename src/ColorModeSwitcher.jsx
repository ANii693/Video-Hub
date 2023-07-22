import React from 'react';
import { useColorMode, useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      variant="ghost"
      color="current"
      pos={'fixed'}
      top={'4'} // here 1 unit is equal to 4px so '4' is equal to 16px
      right={'4'}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      zIndex={'overlay'}
      {...props}
    />
  );
};
