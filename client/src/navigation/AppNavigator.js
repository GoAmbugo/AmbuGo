import React, { useState } from 'react';
import { View, StyleSheet, Touchable } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper'

// internal imports
import HomeScreen from './../screens/AppScreen/HomeScreen'
import ServicesScreen from './../screens/AppScreen/ServicesScreen'
import ActivityScreen from './../screens/AppScreen/ActivityScreen'
import ProfileScreen from './../screens/AppScreen/ProfileScreen'
import colors from '../config/colors';

function AppNavigator(props) {

    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
        { key: 'services', title: 'Services', focusedIcon: 'apps' },
        { key: 'activity', title: 'Activity', focusedIcon: 'history' },
        { key: 'profile', title: 'Profile', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        services: ServicesScreen,
        activity: ActivityScreen,
        profile: ProfileScreen,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
            shifting={true}
            activeColor={colors.primary}
            theme={{ colors: { secondaryContainer: 'transparent' } }} // for the background effect on tab when it's active
            inactiveColor={colors.gray900}
            barStyle={{ backgroundColor: colors.white, borderColor: colors.primary, borderTopWidth: 1 }}
        />
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default AppNavigator;