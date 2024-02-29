import { View, Text } from 'react-native'
import React from 'react'
import Header from '../../components/Header';

export default function HomePage({navigation}) {
  return (
    <View>
      <Header navigation={navigation} />
      <Text>HomePage</Text>
    </View>
  );
}