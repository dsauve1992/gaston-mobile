import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Button, TextInput, Title} from 'react-native-paper';
import {displayName as appName} from '../../../../../../../app.json';
import UserRegistrationUseCase from '../../../../usecases/UserRegistrationUseCase';
import UserRegistrationInfo from '../../../../infrastructure/model/UserRegistrationInfo';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {RootStackParamList, ScreenName} from '../../RootStackParams';
import {RouteProp} from '@react-navigation/native';

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  ScreenName.SIGN_UP_SCREEN
>;
type ProfileScreenRouteProp = RouteProp<
  RootStackParamList,
  ScreenName.SIGN_UP_SCREEN
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
  route: ProfileScreenRouteProp;
};

const SignUpScreen: React.FunctionComponent<Props> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const userRegistrationUseCase = new UserRegistrationUseCase();

  const handleSubmit = (): void => {
    const userRegistrationInfo: UserRegistrationInfo = {
      username,
      email,
      password,
    };

    userRegistrationUseCase
      .register(userRegistrationInfo)
      .then(() => navigation.push(ScreenName.SIGN_IN_SCREEN));
  };

  return (
    <SafeAreaView style={styles.root}>
      <Title style={styles.title}>{appName}</Title>
      <TextInput
        label="User Name"
        style={styles.input}
        value={username}
        onChangeText={(value) => setUsername(value)}
      />
      <TextInput
        label="Email"
        style={styles.input}
        value={email}
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        label="Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={(value) => setPassword(value)}
      />

      <Button
        style={styles.bigButton}
        mode="contained"
        onPress={() => handleSubmit()}>
        Register
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
    marginTop: '5%',
    padding: '3%',
  },
  input: {
    marginTop: '5%',
  },
});
export default SignUpScreen;
