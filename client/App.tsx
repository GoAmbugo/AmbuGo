// third party imports
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

// within app import
import AppNavigator from './src/navigation/AppNavigator';
import AuthNavigator from './src/navigation/AuthNavigator';
import navigationTheme from './src/navigation/navigationTheme';
import AuthContext from './src/auth/context';
import {Provider as PaperProvider} from 'react-native-paper';

function App() {
  const [user, setUser] = useState();

  return (
    <AuthContext.Provider value={{user, setUser}}>
      <PaperProvider theme={navigationTheme}>
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AppNavigator />}
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});

export default App;
