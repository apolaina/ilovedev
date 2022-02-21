import React from 'react';
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';

interface Props extends AnimatedLottieViewProps {
  width?: number | string;
}

const LottieAnimation: React.FC<Props> = ({
  width = 100,
  source,
  style,
}: Props) => {
  return <LottieView source={source} style={[{ width }, style]} autoPlay />;
};

export default LottieAnimation;
