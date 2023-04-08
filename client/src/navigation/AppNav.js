import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

// within app import
import { AuthContext } from './../auth/context';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import navigationTheme from './navigationTheme';

function AppNav(props) {

    const { isLoading, user } = useContext(AuthContext);

    return (
        <PaperProvider theme={navigationTheme}>
            <NavigationContainer theme={navigationTheme}>
                {user ? <AppNavigator /> : <AuthNavigator />}
            </NavigationContainer>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {}
});

export default AppNav;