import React from 'react';
import { extendTheme, NativeBaseProvider, themeTools } from 'native-base';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import AppLoading from 'expo-app-loading';
import {
  NanumGothic_400Regular,
  NanumGothic_700Bold,
  NanumGothic_800ExtraBold,
} from '@expo-google-fonts/nanum-gothic';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

import DrawerContent from './components/DrawerContent';
import Education from './screens/Education';
import Home from './screens/Home';
import Skills from './screens/Skills';
import Experiences from './screens/Experiences';
import AboutMe from './screens/AboutMe';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
};

const colors = {
  primary: {
    50: '#f8fafe',
    100: '#edf2fd',
    200: '#e2eafc',
    300: '#d6e1fb',
    400: '#cddafa',
    500: '#c4d4f9',
    600: '#becff8',
    700: '#b6c9f7',
    800: '#afc3f6',
    900: '#a2b9f5',
  },
  secondary: {
    50: '#fefcfe',
    100: '#fcf7fe',
    200: '#fbf1fd',
    300: '#f9ebfc',
    400: '#f7e7fb',
    500: '#f6e3fa',
    600: '#f5e0f9',
    700: '#f3dcf9',
    800: '#f2d8f8',
    900: '#efd0f6',
  },
  tertiary: {
    50: '#fdfefa',
    100: '#fafef3',
    200: '#f7fdeb',
    300: '#f3fce3',
    400: '#f1fbdd',
    500: '#eefad7',
    600: '#ecf9d3',
    700: '#e9f9cd',
    800: '#e7f8c7',
    900: '#e2f6be',
  },
  cream: {
    50: '#fefbf8',
    100: '#fdf5ed',
    200: '#fcefe2',
    300: '#fbe9d6',
    400: '#fae4cd',
    500: '#f9dfc4',
    600: '#f8dbbe',
    700: '#f7d7b6',
    800: '#f6d2af',
    900: '#f5caa2',
  },
  choco: {
    50: '#f5f3f1',
    100: '#e7e1dc',
    200: '#d7cec4',
    300: '#c6baac',
    400: '#baab9b',
    500: '#ae9c89',
    600: '#a79481',
    700: '#9d8a76',
    800: '#94806c',
    900: '#846e59',
  },
  lightblue: {
    50: '#fbfcfe',
    100: '#f6f8fe',
    200: '#f0f3fd',
    300: '#eaeefc',
    400: '#e6eafb',
    500: '#e1e6fa',
    600: '#dde3f9',
    700: '#d9dff9',
    800: '#d5dbf8',
    900: '#cdd5f6',
  },
  primaryDark: {
    50: '#e1e2e5',
    100: '#b4b6be',
    200: '#828692',
    300: '#4f5666',
    400: '#2a3146',
    500: '#040d25',
    600: '#030b21',
    700: '#03091b',
    800: '#020716',
    900: '#01030d',
  },
  text: {
    body: '#2E394C',
    subTitle: '#8798AD',
    contrast: '#453750',
  },
};

const components = {
  Text: {
    baseStyle: (props: any) => ({
      fontFamily: 'NanumGothic_400Regular',
      fontSize: 'xl',
      color: themeTools.mode('text.body', 'primaryDark.50')(props),
    }),
  },
};

export const theme = extendTheme({
  config,
  colors,
  components,
});

const Drawer = createDrawerNavigator();

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    'VictorMono-BoldItalic': require('./assets/fonts/VictorMono-BoldItalic.ttf'),
    'VictorMono-SemiBoldItalic': require('./assets/fonts/VictorMono-SemiBoldItalic.ttf'),
    'VictorMono-Italic': require('./assets/fonts/VictorMono-Italic.ttf'),
    NanumGothic_400Regular,
    NanumGothic_700Bold,
    NanumGothic_800ExtraBold,
  });

  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <NativeBaseProvider theme={theme}>
      <StatusBar translucent={true} />
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerTintColor: colors.text['body'],
            headerTitleStyle: {
              fontFamily: 'VictorMono-BoldItalic',
            },
          }}
          drawerContent={(props: DrawerContentComponentProps) => (
            <DrawerContent {...props} />
          )}>
          <Drawer.Screen
            name="welcome"
            component={Home}
            options={{
              headerStyle: {
                backgroundColor: colors.primary['500'],
              },
            }}
          />
          <Drawer.Screen
            name="education"
            component={Education}
            options={{
              headerStyle: {
                backgroundColor: colors.secondary['500'],
              },
            }}
          />
          <Drawer.Screen
            name="skills"
            component={Skills}
            options={{
              headerStyle: {
                backgroundColor: colors.lightblue['800'],
              },
            }}
          />
          <Drawer.Screen
            name="experiences"
            component={Experiences}
            options={{
              headerStyle: {
                backgroundColor: colors.tertiary['800'],
              },
            }}
          />
          <Drawer.Screen
            name="about me"
            component={AboutMe}
            options={{
              headerStyle: {
                backgroundColor: colors.primary['500'],
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
