import React, { ReactNode } from 'react';
import { Box, ITextProps } from 'native-base';

import Heading from '../Heading';
import ImageBackground from '../ImageBackground';

interface Props {
  children: ReactNode;
  headingProps?: ITextProps;
}

const CardHeader: React.FC<Props> = ({ children, headingProps }) => (
  <Box>
    <ImageBackground>
      <Heading p={4} {...headingProps}>
        {children}
      </Heading>
    </ImageBackground>
  </Box>
);

export default CardHeader;
