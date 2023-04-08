// third party imports
import React, {useEffect} from 'react';
import {StyleSheet, PermissionsAndroid, Platform} from 'react-native';

// within app import
import {AuthProvider} from './src/auth/context';
import AppNav from './src/navigation/AppNav';
import OnBoardingScreen from './src/screens/OnBoardingScreen';

navigator.geolocation = require('@react-native-community/geolocation');

const App = () => {
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
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
