import React, { ReactNode } from 'react';
import {
  ImageBackground as ImageBackgroundNative,
  ImageSourcePropType,
  ViewStyle,
} from 'react-native';

interface Props {
  backgroundUrl?: ImageSourcePropType;
  style?: ViewStyle;
  children: ReactNode;
}

const ImageBackground: React.FC<Props> = ({
  backgroundUrl = require('../assets/splash.png'),
  style,
  children,
}: Props) => (
  <ImageBackgroundNative
    source={backgroundUrl}
    style={{ width: '101%', ...style }}>
    {children}
  </ImageBackgroundNative>
);

export default ImageBackground;
