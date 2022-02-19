import React from 'react';
import LottieView, { AnimatedLottieViewProps } from 'lottie-react-native';

interface Props extends AnimatedLottieViewProps {
  width?: number | string;
}

const LottieAnimation: React.FC<Props> = ({ width = 100, source }: Props) => {
  return <LottieView source={source} style={{ width }} autoPlay />;
};

export default LottieAnimation;
