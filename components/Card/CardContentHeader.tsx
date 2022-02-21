import React, { ReactNode } from 'react';
import { Text } from 'native-base';

interface Props {
  children: ReactNode;
}

const CardContentHeader: React.FC<Props> = ({ children }) => (
  <Text
    _light={{
      color: 'primary.900',
    }}
    _dark={{
      color: 'secondary.900',
    }}>
    {children}
  </Text>
);

export default CardContentHeader;
