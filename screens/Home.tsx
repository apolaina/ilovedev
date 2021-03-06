import React from 'react';
import { Box, ScrollView, Text, VStack } from 'native-base';
import { getMomentOfDay } from '../utils/Moment';

import ClickableBadge from '../components/ClickableBadge';
import BadgeContainer from '../components/BadgeContainer';
import Heading from '../components/Heading';
import HighlightedText from '../components/HighlightedText';
import ImageBackground from '../components/ImageBackground';
import LottieAnimation from '../components/LottieAnimation';

const Home: React.FC = () => {
  const momentOfDay = getMomentOfDay();

  return (
    <ImageBackground
      backgroundUrl={require('../assets/splash.png')}
      style={{ flex: 1 }}>
      <ScrollView bgColor="transparent">
        <VStack
          rounded="lg"
          flex={1}
          _light={{ bg: 'white:alpha.70' }}
          _dark={{ bg: 'primaryDark.400' }}
          m={5}
          p={8}>
          <Heading pb={5}>{`Good ${momentOfDay},`}</Heading>
          <Text>
            My name is <HighlightedText underline>Alice</HighlightedText>! Nice
            to meet you.
          </Text>
          <Text>I am very happy if you see this today.</Text>
          <Text pt={5}>
            As a frontend & mobile developer, I love to discover new things. As
            demonstrated by this mobile playground application using:
          </Text>

          <BadgeContainer>
            <ClickableBadge
              text="React Native"
              href="https://reactnative.dev/"
            />
            <ClickableBadge text="Native Base" href="https://nativebase.io/" />
            <ClickableBadge text="Expo" href="https://expo.dev/" />
            <ClickableBadge
              text="TypeScript"
              href="https://www.typescriptlang.org/"
            />
            <ClickableBadge text="Lottie" href="https://airbnb.io/lottie/" />
          </BadgeContainer>

          <Text pt={2}>
            Through this app, you can learn more about my background, my{' '}
            <Text fontFamily="VictorMono-Italic">skills</Text> & my interests. I
            hope you will enjoy it!
          </Text>
          <Text>I look forward to talking with you,</Text>

          <Box alignItems="center">
            <LottieAnimation
              width={300}
              source={require('../assets/animations/programmer.json')}
            />
          </Box>
          {/*</LinearGradient>*/}
        </VStack>
      </ScrollView>
    </ImageBackground>
  );
};

export default Home;
