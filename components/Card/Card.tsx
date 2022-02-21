import React, { ReactNode } from 'react';
import { Box } from 'native-base';

interface Props {
  children: ReactNode;
}

const Card: React.FC<Props> = ({ children }) => (
  <Box
    rounded="lg"
    overflow="hidden"
    borderColor="coolGray.200"
    borderWidth="1"
    _dark={{
      borderColor: 'primaryDark.800',
      backgroundColor: 'primaryDark.400',
    }}
    _light={{
      backgroundColor: 'gray.50',
    }}>
    {children}
  </Box>
);

export default Card;
