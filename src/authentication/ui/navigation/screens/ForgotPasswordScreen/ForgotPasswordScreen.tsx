import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

const ForgotPasswordScreen: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Title style={styles.title}>Forgot password screen</Title>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: '100%',
    margin: '10%',
  },
  title: {
    textAlign: 'center',
    fontSize: 50,
    paddingTop: '50%',
    paddingBottom: '20%',
    textTransform: 'uppercase',
  },
});
export default ForgotPasswordScreen;
