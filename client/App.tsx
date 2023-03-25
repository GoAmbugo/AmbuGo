// third party imports
import React, {useEffect, useState} from 'react';
import {StyleSheet, PermissionsAndroid, Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// within app import
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import navigationTheme from './src/navigation/navigationTheme';
import AuthContext from './src/auth/context';
import {Provider as PaperProvider} from 'react-native-paper';

navigator.geolocation = require('@react-native-community/geolocation');

function App() {
  const [user, setUser] = useState();

  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'AmbuGo App Location Permission',
          message:
            'AmbuGo App needs access to your location ' +
            'so you can book rides flawlessly.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      androidPermission();
    }
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <PaperProvider theme={navigationTheme}>
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
