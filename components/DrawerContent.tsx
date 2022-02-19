import React, { PropsWithChildren } from 'react';
import {
  Box,
  Divider,
  Flex,
  HStack,
  Icon,
  Link,
  Pressable,
  Text,
  VStack,
} from 'native-base';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import HighlightedText from './HighlightedText';
import { Linking } from 'react-native';
import ImageBackground from './ImageBackground';

interface Props extends DrawerContentComponentProps {}

const DrawerContent: React.FC<Props> = (props: Props) => (
  <DrawerContentScrollView
    {...props}
    contentContainerStyle={{
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
    <VStack divider={<Divider />} space="4">
      <VStack space="3" pt={2}>
        {props.state.routeNames.map((name: string, index: number) => (
          <Pressable
            key={name}
            px="5"
            py="3"
            bg={index === props.state.index ? 'primary.700' : 'primary.200'}
            _pressed={{ bg: 'primary.100' }}
            onPress={() => props.navigation.navigate(name)}>
            <HStack alignItems="center">
              <HighlightedText
                color="text.body"
                underline={index === props.state.index}>
                {name.toLowerCase()}
              </HighlightedText>
            </HStack>
          </Pressable>
        ))}
        <Pressable
          px="5"
          py="3"
          bg="primary.200"
          _pressed={{ bg: 'primary.100' }}
          onPress={() =>
            Linking.openURL(
              'mailto:polainalice@gmail,com?subject=Hi%20Alice,%20i%20saw%20your%20app',
            )
          }>
          <HStack alignItems="center">
            <HighlightedText color="text.body">email me ✎</HighlightedText>
          </HStack>
        </Pressable>
      </VStack>
    </VStack>
    <ImageBackground>
      <VStack px="5" py="3" alignItems="center">
        <Text fontSize="xs">Made with ♡</Text>
      </VStack>
    </ImageBackground>
  </DrawerContentScrollView>
);

export default DrawerContent;
