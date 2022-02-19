import React, { useEffect, useState } from 'react';
import { NativeStackScreenProps } from 'react-native-screens/native-stack';
import { Badge, Box, PresenceTransition, ScrollView, Stack } from 'native-base';
import Loading from '../components/Loading';
import { SkillsAPI } from '../utils/API/SkillsAPI';
import CardHeader from '../components/Card/CardHeader';
import CardContent from '../components/Card/CardContent';
import Card from '../components/Card/Card';
import BadgeContainer from '../components/BadgeContainer';

interface Props extends NativeStackScreenProps<any> {}

const Skills: React.FC<Props> = ({}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [skills, setSkills] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await SkillsAPI.get();
      setSkills(data);
    };

    fetchData()
      .finally(() => setLoading(false))
      .catch(console.error);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ScrollView bgColor="transparent">
      <Box alignItems="center" px={3} py={5}>
        <Stack space={5}>
          {Object.keys(skills).map((skillType: string, skillsIndex: number) => (
            <Card key={skillType}>
              <CardHeader>{skillType}</CardHeader>
              <CardContent>
                <BadgeContainer justifyContent="center">
                  {skills[skillType].map(
                    (skill: string, skillIndex: number) => (
                      <PresenceTransition
                        visible
                        key={skill}
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: {
                            duration: 250,
                            delay: 50 + skillsIndex * 150 + skillIndex * 10,
                          },
                        }}>
                        <Badge
                          colorScheme="primary"
                          variant="solid"
                          roundedTopLeft="lg"
                          roundedBottomRight="lg"
                          mb="2"
                          _text={{
                            fontSize: 'xl',
                          }}>
                          {skill}
                        </Badge>
                      </PresenceTransition>
                    ),
                  )}
                </BadgeContainer>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>
    </ScrollView>
  );
};

export default Skills;
