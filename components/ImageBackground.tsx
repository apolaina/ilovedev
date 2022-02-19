import React, { ReactNode } from 'react';
import {
  ImageBackground as ImageBackgroundNative,
  ImageSourcePropType,
} from 'react-native';

interface Props {
  backgroundUrl?: ImageSourcePropType;
  children: ReactNode;
}

const ImageBackground: React.FC<Props> = ({
  backgroundUrl = require('../assets/splash.png'),
  children,
}: Props) => (
  <ImageBackgroundNative source={backgroundUrl} style={{ width: '101%' }}>
    {children}
  </ImageBackgroundNative>
);

export default ImageBackground;
