import React, {useState} from 'react';
import {View, StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// internal imports
import HomeNavigator from './HomeNavigator';
import ActivityScreen from './../screens/AppScreen/ActivityScreen';
import ProfileScreen from './../screens/AppScreen/ProfileScreen';
import colors from '../config/colors';
import routes from './routes';
import ServicesScreenNavigator from './ServicesScreenNavigator';

const Tab = createBottomTabNavigator();

function AppNavigator(props) {
  const [focus, setFocus] = useState(0);

  return (
    <Tab.Navigator
      initialRouteName={routes.HOMEAPPSCREEN}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {height: '8%'},
        tabBarInactiveTintColor: colors.gray900,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === routes.HOMEAPPSCREEN) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === routes.SERVICESROUTE) {
            iconName = focused ? 'apps' : 'apps';
          } else if (route.name === routes.ACTIVITYAPPSCREEN) {
            iconName = focused ? 'history' : 'history';
          } else if (route.name === routes.PROFILEAPPSCREEN) {
            iconName = focused ? 'account' : 'account-outline';
          }
          return (
            <Icon
              name={iconName}
              size={30}
              color={color}
              style={
                focused
                  ? {transform: [{translateY: -2}]}
                  : {transform: [{translateY: 0}]}
              }
            />
          );
        },
      })}>
      <Tab.Screen
        name={routes.HOMEAPPSCREEN}
        component={HomeNavigator}
        options={{
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name={routes.SERVICESROUTE}
        component={ServicesScreenNavigator}
        options={{
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name={routes.ACTIVITYAPPSCREEN}
        component={ActivityScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
        }}
      />
      <Tab.Screen
        name={routes.PROFILEAPPSCREEN}
        component={ProfileScreen}
        options={{
          tabBarLabel: () => {
            return null;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default AppNavigator;
