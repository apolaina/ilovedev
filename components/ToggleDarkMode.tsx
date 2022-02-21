import React from 'react';
import { HStack, ITextProps, Switch, Text, useColorMode } from 'native-base';

interface Props extends ITextProps {}

export const ToggleDarkMode: React.FC<Props> = ({ ...props }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack
      space={2}
      alignItems="center"
      bg="primary.200"
      px="5"
      py="3"
      {...props}>
      <Text {...props}>☽</Text>
      <Switch
        isChecked={colorMode === 'light'}
        onToggle={toggleColorMode}
        size="lg"
      />
    </HStack>
  );
};
