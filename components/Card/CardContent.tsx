import React, { ReactNode } from 'react';
import { Stack } from 'native-base';

interface Props {
  children: ReactNode;
}

const CardContent: React.FC<Props> = ({ children }) => (
  <Stack p="4" space={3}>
    {children}
  </Stack>
);

export default CardContent;
