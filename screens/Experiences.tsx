import React, { useEffect, useState } from 'react';
import { Box, FlatList, Link, ScrollView, Text, View } from 'native-base';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { Dimensions } from 'react-native';
import { ExperiencesAPI } from '../utils/API/ExperiencesAPI';

import HighlightedText from '../components/HighlightedText';
import Loading from '../components/Loading';
import LottieAnimation from '../components/LottieAnimation';

import { Experience } from '../models/Experience';
import { IDictionary } from '../models/IDictionary';

const Experiences: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [experiences, setExperiences] = useState<IDictionary<Experience>>();
  const { width } = Dimensions.get('window');
  const colors = {
    light: ['primary.700', 'secondary.700'],
    dark: ['primaryDark.400', 'primaryDark.700'],
  };

  const experienceItem = ({ item }: { item: any }) => (
    <Box borderBottomWidth="1" borderColor="text.body" px="2" py="2">
      <HighlightedText textAlign="center" fontSize="lg">
        {item.name}
      </HighlightedText>
    </Box>
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await ExperiencesAPI.get();
      setExperiences(data);
    };

    fetchData()
      .finally(() => setLoading(false))
      .catch(console.error);
  }, []);

  return loading || !experiences ? (
    <Loading />
  ) : (
    <View flex={1}>
      <SwiperFlatList
        showPagination
        paginationActiveColor="#e7f8c7"
        paginationDefaultColor="#2E394C">
        {Object.keys(experiences).map((experience: string, index: number) => (
          <ScrollView
            w={width}
            _light={{ bg: colors.light[index % colors.light.length] }}
            _dark={{ bg: colors.dark[index % colors.dark.length] }}
            key={experience}>
            <Box p={10}>
              <Box alignSelf="center">
                <Link href={experiences[experience].url} isExternal>
                  <HighlightedText fontSize="4xl" underline>
                    {experience.toLowerCase()}
                  </HighlightedText>
                </Link>
              </Box>
              <Box alignSelf="center">
                <HighlightedText fontSize="xs">
                  {experiences[experience].dates}
                </HighlightedText>
              </Box>
              <Box alignSelf="center" p={5}>
                <LottieAnimation
                  width={250}
                  source={experiences[experience].imageUrl}
                />
              </Box>
              <Box alignSelf="flex-start">
                <Text fontSize="sm" textAlign="justify">
                  {experiences[experience].context}
                </Text>
              </Box>
              <Box alignSelf="flex-start" pt={8}>
                <FlatList
                  data={experiences[experience].missions}
                  renderItem={experienceItem}
                  keyExtractor={(item: any) => item.name}
                />
              </Box>
            </Box>
          </ScrollView>
        ))}
      </SwiperFlatList>
    </View>
  );
};

export default Experiences;
