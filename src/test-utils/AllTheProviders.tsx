import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import theme from '../app/global/ui/theme/theme';
import {Provider as ReduxProvider} from 'react-redux';
import store from '../app/global/adapters/store';

const AllTheProviders: React.FunctionComponent<{}> = (props: any) => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>{props.children}</PaperProvider>
    </ReduxProvider>
  );
};

export default AllTheProviders;
