import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { View, StyleSheet } from 'react-native';
import ProfileScreen from "../screens/AppScreen/ProfileScreen";
import CouponsScreen from "../screens/AppScreen/ProfileScreen/CouponsScreen";
import HelpScreen from "../screens/AppScreen/ProfileScreen/HelpScreen";
import LegalScreen from "../screens/AppScreen/ProfileScreen/LegalScreen";
import MessageScreen from "../screens/AppScreen/ProfileScreen/MessageScreen";
import ReferScreen from "../screens/AppScreen/ProfileScreen/ReferScreen";
import RideScreen from "../screens/AppScreen/ProfileScreen/RideScreen";
import SettingsScreen from "../screens/AppScreen/ProfileScreen/SettingsScreen";
import WalletScreen from "../screens/AppScreen/ProfileScreen/WalletScreen";
import routes from "./routes";

const Stack = createStackNavigator()

function ProfileScreenNavigator(props) {
  return (
    <Stack.Navigator initialRouteName={routes.PROFILEAPPSCREEN}>
      <Stack.Screen name={routes.PROFILEAPPSCREEN} component={ProfileScreen} options={{ headerShown: false }} />
      <Stack.Screen name={routes.HELPSCREEN} component={HelpScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
      <Stack.Screen name={routes.WALLETSCREEN} component={WalletScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
      <Stack.Screen name={routes.RIDESCREEN} component={RideScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
      <Stack.Screen name={routes.MESSAGESCREEN} component={MessageScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
      <Stack.Screen name={routes.COUPONSCREEN} component={CouponsScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
      <Stack.Screen name={routes.REFERSCREEN} component={ReferScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
      <Stack.Screen name={routes.SETTINGSCREEN} component={SettingsScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
      <Stack.Screen name={routes.LEGALSCREEN} component={LegalScreen} options={{ headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default ProfileScreenNavigator;