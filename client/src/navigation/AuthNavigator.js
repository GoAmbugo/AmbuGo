import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import routes from './routes';

import WelcomeScreen from '../screens/WelcomeScreen';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import VerifyOTPScreen from '../screens/VerifyOTPScreen';

const Stack = createStackNavigator();

export default AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.WELCOME}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.AUTHENTICATION}
        component={AuthenticationScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.VERIFYOTP}
        component={VerifyOTPScreen}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </Stack.Navigator>
  );
};
