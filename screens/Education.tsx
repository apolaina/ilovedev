import React from 'react';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { Box, HStack, ScrollView, Stack, Text } from 'native-base';

import LottieAnimation from '../components/LottieAnimation';
import HighlightedText from '../components/HighlightedText';
import Card from '../components/Card/Card';
import CardHeader from '../components/Card/CardHeader';
import CardContent from '../components/Card/CardContent';

interface Props extends NativeStackScreenProps<any> {}

const Education: React.FC<Props> = ({}) => (
  <ScrollView bgColor="transparent">
    <Box alignItems="center" px={3} py={5}>
      <Stack space={5}>
        <Card>
          <CardHeader>Titre Professionnel</CardHeader>
          <CardContent>
            <Stack space={2}>
              <Text
                _light={{
                  color: 'primary.900',
                }}
                _dark={{
                  color: 'primary.200',
                }}>
                Conceptrice développeuse informatique
              </Text>
            </Stack>
            <Text>
              software engineering: project management, specifications,
              modeling, data models, database (Oracle), SQL, DQL, Java &
              front-end technologies
            </Text>
            <HighlightedText>
              degree obtained in 2015{' '}
              <HighlightedText fontSize="sm">(Bac +4)</HighlightedText>
            </HighlightedText>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="text.subTitle"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="400">
                  AFPA (Agence pour la Formation Professionnelle des Adultes) -
                  Balma (fr)
                </Text>
              </HStack>
            </HStack>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Licence professionnelle</CardHeader>
          <CardContent>
            <Stack space={2}>
              <Text
                _light={{
                  color: 'primary.900',
                }}
                _dark={{
                  color: 'primary.200',
                }}>
                Nouvelles Technologies de l’Information et de la Communication
              </Text>
            </Stack>
            <Text>
              website and mobile app creation: PHP, HTML5, CSS3, JavaScript,
              Ajax, CMS
            </Text>
            <HighlightedText underline={false}>
              degree obtained in 2012{' '}
              <HighlightedText fontSize="sm">(Bac +3)</HighlightedText>
            </HighlightedText>
            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between">
              <HStack alignItems="center">
                <Text
                  color="text.subTitle"
                  _dark={{
                    color: 'warmGray.200',
                  }}
                  fontWeight="400">
                  Université Toulouse 2 – Foix (fr)
                </Text>
              </HStack>
            </HStack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
    <Box alignItems="center" p={5} bg="primary.500">
      <LottieAnimation
        width="100%"
        source={require('../assets/animations/education.json')}
      />
    </Box>
  </ScrollView>
);

export default Education;
