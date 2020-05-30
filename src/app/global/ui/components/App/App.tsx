import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from '../../../adapters/store';
import IsApplicationReadySwitchNavigator from '../../navigation/NavigatorSwitch/NavigatorSwitch';
import {NavigationContainer} from '@react-navigation/native';
import theme from '../../theme/theme';

class App extends React.PureComponent<{}> {
  constructor(props: Readonly<{}>) {
    super(props);
  }

  render() {
    return (
      <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <IsApplicationReadySwitchNavigator />
          </NavigationContainer>
        </PaperProvider>
      </ReduxProvider>
    );
  }
}

export default App;
