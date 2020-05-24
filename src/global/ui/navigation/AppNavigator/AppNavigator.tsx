import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList, ScreenName} from '../RootStackParams';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FunctionComponent<{}> = () => (
  <Stack.Navigator>
    <Stack.Screen name={ScreenName.HOME_SCREEN} component={HomeScreen} />
  </Stack.Navigator>
);

export default AppNavigator;
