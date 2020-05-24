import * as React from 'react';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList, ScreenName} from '../RootStackParams';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AuthenticationNavigator: React.FunctionComponent = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={ScreenName.SIGN_IN_SCREEN}
      component={SignInScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={ScreenName.SIGN_UP_SCREEN}
      component={SignUpScreen}
    />
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name={ScreenName.FORGOT_PASSWORD_SCREEN}
      component={ForgotPasswordScreen}
    />
  </Stack.Navigator>
);

export default AuthenticationNavigator;
