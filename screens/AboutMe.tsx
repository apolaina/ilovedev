import React from 'react';
import { Box, Image, Text, ScrollView, VStack } from 'native-base';

import ImageBackground from '../components/ImageBackground';
import HighlightedText from '../components/HighlightedText';
import Heading from '../components/Heading';

const AboutMe: React.FC = () => (
  <ImageBackground
    backgroundUrl={require('../assets/splash.png')}
    style={{ flex: 1 }}>
    <ScrollView bgColor="transparent">
      <VStack flex={1} m={5} alignItems="center">
        <Box
          size={175}
          borderRadius={100}
          _light={{ borderColor: 'white:alpha.70' }}
          _dark={{ borderColor: 'primaryDark.400' }}
          borderWidth={2}
          borderStyle="dashed"
          alignItems="center"
          justifyContent="center">
          <Box shadow="5">
            <Image
              size={150}
              resizeMode={'contain'}
              borderRadius={100}
              source={require('../assets/images/me.jpeg')}
              alt="Meeeee"
            />
          </Box>
        </Box>
        <Box
          rounded="lg"
          _light={{ bg: 'white:alpha.70' }}
          _dark={{ bg: 'primaryDark.400' }}
          mt={-10}
          p={8}
          pt={12}
          w="100%"
          flex={1}
          zIndex={-1}>
          <Text>
            I had the chance to discover new{' '}
            <HighlightedText>languages</HighlightedText>,{' '}
            <HighlightedText>tools</HighlightedText> and{' '}
            <HighlightedText>frameworks</HighlightedText> through my past
            experiences. The <HighlightedText>discovery</HighlightedText>, the{' '}
            <HighlightedText>learning</HighlightedText> are things that drive me
            every day in my work. This openness has allowed me to cover the
            world of development for which I have a certain attraction. I have
            the heart to continue in this way by perfecting myself with{' '}
            <HighlightedText>React Native</HighlightedText> or{' '}
            <HighlightedText>Flutter</HighlightedText>.
          </Text>
          <Text>There are still so many things to cover in my world!</Text>

          <Heading pt={5}>Other things i love...</Heading>
          <Text>
            Good food, sports (swimming, running, hiking), volunteer at the SPCA
            for 3 years 🐱
          </Text>
        </Box>
      </VStack>
    </ScrollView>
  </ImageBackground>
);

export default AboutMe;
