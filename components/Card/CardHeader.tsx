import React, { ReactNode } from 'react';
import { Box } from 'native-base';

import Heading from '../Heading';
import ImageBackground from '../ImageBackground';

interface Props {
  children: ReactNode;
}

const CardHeader: React.FC<Props> = ({ children }) => (
  <Box>
    <ImageBackground>
      <Heading p={4}>{children}</Heading>
    </ImageBackground>
  </Box>
);

export default CardHeader;
