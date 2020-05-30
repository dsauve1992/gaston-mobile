import React from 'react';
import 'jest';
import SignInScreen, {ProfileScreenNavigationProp} from './SignInScreen';
import {render} from 'test-utils';
import {StackNavigationProp} from '@react-navigation/stack/lib/typescript/src/types';
import {RootStackParamList, ScreenName} from '../../RootStackParams';

describe('given navigation', () => {
  const navigation = {
    push: jest.fn(),
  } as StackNavigationProp<RootStackParamList, ScreenName.SIGN_IN_SCREEN>;

  it('should display an email input', () => {
    const {getByTestId} = render(<SignInScreen navigation={navigation} />);
    expect(getByTestId('email-input')).toBeDefined();
  });

  it('should display a password input', () => {
    const {getByTestId} = render(<SignInScreen navigation={navigation} />);
    expect(getByTestId('password-input')).toBeDefined();
  });
});
