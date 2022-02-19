import React from 'react';
import { Center } from 'native-base';
import LottieAnimation from './LottieAnimation';

const Loading = () => (
  <Center flex={1} _dark={{ bg: 'xanadu.500' }}>
    <LottieAnimation
      source={require('../assets/animations/loading.json')}
      width={250}
    />
  </Center>
);

export default Loading;
