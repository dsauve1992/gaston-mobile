import {StyleSheet, Text, View} from 'react-native';
import * as React from 'react';
import {Button} from 'react-native-paper';
import withAuthenticatedUser from '../../../../authentication/ui/hoc/withAuthenticatedUser/withAuthenticatedUser';
import UserSignOutUseCase from '../../../../authentication/usecases/UserSignOutUseCase';

type Props = {
  currentUser: any;
};

const HomeScreen: React.FunctionComponent<Props> = ({currentUser}: Props) => {
  const handleDisconnect = () => {
    new UserSignOutUseCase().signOut();
  };

  return (
    <View style={styles.root}>
      <Button
        mode="contained"
        icon="plus"
        onPress={() => {
          console.warn('hello world');
        }}>
        New Workout
      </Button>

      <Text style={styles.text}>Welcome {currentUser.displayName}</Text>
      <Button onPress={() => handleDisconnect()}>Disconnect</Button>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default withAuthenticatedUser(HomeScreen);
