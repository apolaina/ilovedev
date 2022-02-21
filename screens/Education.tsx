import React, { useEffect, useState } from 'react';
import { Box, HStack, ScrollView, Stack, Text } from 'native-base';

import Card from '../components/Card/Card';
import CardContent from '../components/Card/CardContent';
import CardContentHeader from '../components/Card/CardContentHeader';
import CardHeader from '../components/Card/CardHeader';
import HighlightedText from '../components/HighlightedText';
import LottieAnimation from '../components/LottieAnimation';
import { EducationAPI } from '../utils/API/EducationAPI';
import Loading from '../components/Loading';

import { Education as EducationModel } from '../models/Education';
import { IDictionary } from '../models/IDictionary';

const Education: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [education, setEducation] = useState<IDictionary<EducationModel>>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await EducationAPI.get();
      setEducation(data);

      console.log(data['Licence professionnelle']);
    };

    fetchData()
      .finally(() => setLoading(false))
      .catch(console.error);
  }, []);

  return loading || !education ? (
    <Loading />
  ) : (
    <ScrollView bgColor="transparent">
      <Box alignItems="center" px={3} py={5}>
        <Stack space={5}>
          {Object.keys(education).map((educationKey: string, index) => (
            <Card key={index}>
              <CardHeader
                headingProps={{ _dark: { color: 'primaryDark.500' } }}>
                {educationKey}
              </CardHeader>
              <CardContent>
                <Stack space={2}>
                  <CardContentHeader>
                    {education[educationKey].name}
                  </CardContentHeader>
                </Stack>
                <Text>{education[educationKey].subject}</Text>
                <HighlightedText>
                  {education[educationKey].date}{' '}
                  <HighlightedText fontSize="sm">
                    {education[educationKey].level}
                  </HighlightedText>
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
                      {education[educationKey].school}
                    </Text>
                  </HStack>
                </HStack>
              </CardContent>
            </Card>
          ))}
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
};

export default Education;
