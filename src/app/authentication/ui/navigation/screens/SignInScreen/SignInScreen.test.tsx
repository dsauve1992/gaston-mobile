import React from 'react';
import 'jest';
import {act, render} from 'test-utils';
import {fireEvent, waitFor} from 'react-native-testing-library';
import AuthenticationNavigator from '../../AuthenticationNavigator/AuthenticationNavigator';
import {NavigationContainer} from '@react-navigation/native';

describe('SignIn screen', () => {
  it('should display email input', async () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>,
    );

    await act(async () => {});

    expect(getByTestId('email-input')).toBeDefined();
  });

  it('should display password input', async () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>,
    );

    await act(async () => {});

    expect(getByTestId('password-input')).toBeDefined();
  });

  describe('when click on forgot password button', () => {
    it('should redirect to forgot password screen', async () => {
      const {getByTestId} = render(
        <NavigationContainer>
          <AuthenticationNavigator />
        </NavigationContainer>,
      );

      await act(async () => {
        fireEvent(getByTestId('forgot-password-button'), 'press');
      });

      await waitFor(() => getByTestId('forgot-password-screen'));

      expect(getByTestId('forgot-password-screen')).toBeDefined();
    });
  });

  describe('when click on sign up button', () => {
    it('should redirect to sign up screen', async () => {
      const {getByTestId} = render(
        <NavigationContainer>
          <AuthenticationNavigator />
        </NavigationContainer>,
      );

      await act(async () => {
        fireEvent(getByTestId('sign-up-button'), 'press');
      });

      await waitFor(() => getByTestId('sign-up-screen'));

      expect(getByTestId('sign-up-screen')).toBeDefined();
    });
  });
});
