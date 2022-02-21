import React, { useEffect } from 'react';
import {
  Divider,
  HStack,
  Pressable,
  Text,
  useColorMode,
  VStack,
} from 'native-base';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Linking } from 'react-native';

import HighlightedText from './HighlightedText';
import ImageBackground from './ImageBackground';
import { ToggleDarkMode } from './ToggleDarkMode';

interface Props extends DrawerContentComponentProps {}

const DrawerContent: React.FC<Props> = (props: Props) => {
  const { colorMode } = useColorMode();

  useEffect(() => {
    console.log('colorMode', colorMode);
  }, [colorMode]);

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: colorMode === 'light' ? '#fafaf9' : '#2a3146',
      }}>
      <VStack divider={<Divider />} space="4">
        <VStack space="3" pt={2}>
          {props.state.routeNames.map((name: string, index: number) => (
            <Pressable
              key={name}
              px="5"
              py="3"
              _light={{
                bg: index === props.state.index ? 'primary.700' : 'primary.200',
              }}
              _dark={{
                bg:
                  index === props.state.index
                    ? 'primaryDark.700'
                    : 'primaryDark.200',
              }}
              _pressed={{
                _light: { bg: 'primary.100' },
                _dark: { bg: 'primaryDark.100' },
              }}
              onPress={() => props.navigation.navigate(name)}>
              <HStack alignItems="center">
                <HighlightedText
                  _light={{ color: 'text.body' }}
                  _dark={{ color: 'primaryDark.50' }}
                  underline={index === props.state.index}>
                  {name.toLowerCase()}
                </HighlightedText>
              </HStack>
            </Pressable>
          ))}
          <Pressable
            px="5"
            py="3"
            _light={{
              bg: 'primary.200',
            }}
            _dark={{
              bg: 'primaryDark.200',
            }}
            _pressed={{
              _light: { bg: 'primary.100' },
              _dark: { bg: 'primaryDark.100' },
            }}
            onPress={() =>
              Linking.openURL(
                'mailto:oups@gmail,com?subject=Hi%20Alice,%20i%20saw%20your%20app',
              )
            }>
            <HStack alignItems="center">
              <HighlightedText
                _light={{ color: 'text.body' }}
                _dark={{ color: 'primaryDark.50' }}>
                email me ✎
              </HighlightedText>
            </HStack>
          </Pressable>
          <ToggleDarkMode
            style={{ overflow: 'hidden' }}
            _light={{
              color: 'text.body',
              bg: 'primary.200',
            }}
            _dark={{
              color: 'primaryDark.50',
              bg: 'primaryDark.200',
            }}
          />
        </VStack>
      </VStack>
      <ImageBackground>
        <VStack px="5" py="3" alignItems="center">
          <Text fontSize="xs" color="text.body">
            Made with ♡
          </Text>
        </VStack>
      </ImageBackground>
    </DrawerContentScrollView>
  );
};

export default DrawerContent;
