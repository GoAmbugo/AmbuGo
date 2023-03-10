import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/AppScreen/HomeScreen';
import DestinationSearch from '../screens/DestinationSearch';
import MapReview from '../screens/MapReview';

const Stack = createStackNavigator();

export default HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="home-screen">
      <Stack.Screen name="home-screen" component={HomeScreen} />
      <Stack.Screen name="destination-search" component={DestinationSearch} />
      <Stack.Screen name="map-review" component={MapReview} />
    </Stack.Navigator>
  );
};
