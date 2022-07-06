// Photo by Sharefaith from Pexels
// Background image: https://www.pexels.com/photo/pink-rose-closeup-photography-1231265/

import React, {useEffect} from 'react';
import {
  StatusBar,
  FlatList,
  Image,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Easing,
  SafeAreaViewBase,
  SafeAreaView,
} from 'react-native';
const {width, height} = Dimensions.get('screen');
import {faker} from '@faker-js/faker';
import uuidv4 from './src/config';

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: uuidv4(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.shuffle([
      'women',
      'men',
    ])}/${faker.random.numeric(60)}.jpg`,
    name: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;

export default function App() {
  useEffect(() => {
    console.log(DATA);
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar hidden />
    </View>
  );
}
