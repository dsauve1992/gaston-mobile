import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import EmailPasswordCredential from '../../../../infrastructure/model/EmailPasswordCredential';
import UserSignInUseCase from '../../../../usecases/UserSignInUseCase';
import {displayName as appName} from '../../../../../../../app.json';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {RootStackParamList, ScreenName} from '../../RootStackParams';

export type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenName.SIGN_IN_SCREEN
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const SignInScreen: React.FunctionComponent<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const userSignInUseCase = new UserSignInUseCase();

  const handleSubmit = (): void => {
    userSignInUseCase.signIn(new EmailPasswordCredential(email, password));
  };

  return (
    <SafeAreaView style={styles.root}>
      <Title style={styles.title}>{appName}</Title>
      <TextInput
        testID="email-input"
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        testID="password-input"
        label="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={(value) => setPassword(value)}
      />
      <Button
        testID="forgot-password-button"
        style={styles.forgotPasswordButton}
        uppercase={false}
        onPress={() => {
          console.log('hello');
          navigation.push(ScreenName.FORGOT_PASSWORD_SCREEN);
        }}>
        Forgot password ?
      </Button>

      <Button
        testID="sign-in-button"
        style={styles.bigButton}
        mode="contained"
        onPress={() => handleSubmit()}>
        Sign in
      </Button>
      <Button
        testID="sign-up-button"
        style={styles.bigButton}
        onPress={() => navigation.push(ScreenName.SIGN_UP_SCREEN)}>
        Sign up
      </Button>
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
  bigButton: {
    padding: '3%',
  },
  forgotPasswordButton: {
    marginBottom: '5%',
  },
  input: {
    marginTop: '5%',
  },
});
export default SignInScreen;
