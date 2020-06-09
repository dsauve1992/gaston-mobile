import * as React from 'react';
import SignInScreen from '../screens/SignInScreen/SignInScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList, ScreenName} from '../RootStackParams';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen/ForgotPasswordScreen';

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

const AuthenticationNavigator: React.FunctionComponent = () => (
  <Navigator>
    <Screen
      options={{
        headerShown: false,
      }}
      name={ScreenName.SIGN_IN_SCREEN}
      component={SignInScreen}
    />
    <Screen
      options={{
        headerShown: false,
      }}
      name={ScreenName.SIGN_UP_SCREEN}
      component={SignUpScreen}
    />
    <Screen
      options={{
        headerShown: false,
      }}
      name={ScreenName.FORGOT_PASSWORD_SCREEN}
      component={ForgotPasswordScreen}
    />
  </Navigator>
);

export default AuthenticationNavigator;
