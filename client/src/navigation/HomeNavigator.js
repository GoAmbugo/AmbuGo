import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/AppScreen/HomeScreen';
import routes from './routes';
import DestinationSearch from '../screens/DestinationSearch';
import MapReview from '../screens/MapReview';
import AmbulanceTypeInfoScreen from '../screens/AppScreen/ServicesScreen/AmbulanceTypeInfoScreen';

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
      <Stack.Screen name={routes.AMBULANCETYPEINFO} component={AmbulanceTypeInfoScreen}/>
    </Stack.Navigator>
  );
};
