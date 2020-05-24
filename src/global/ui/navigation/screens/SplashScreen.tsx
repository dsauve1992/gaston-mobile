import {StyleSheet, View} from 'react-native';
import * as React from 'react';

import {displayName as appName} from '../../../../../app.json';
import theme from '../../theme/theme';
import {Subheading, Title} from 'react-native-paper';

const SplashScreen: React.FunctionComponent = () => (
  <View style={styles.root}>
    <Title style={styles.text}>{appName}</Title>
    <Subheading style={styles.subheading}>strengthen your fingers</Subheading>
  </View>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  text: {
    fontSize: 50,
    lineHeight: 50,
    textTransform: 'uppercase',
    color: theme.colors.primary,
  },
  subheading: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: theme.colors.text,
  },
});

export default SplashScreen;
