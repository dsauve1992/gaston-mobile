export enum ScreenName {
  SIGN_IN_SCREEN = 'SignInScreen',
  SIGN_UP_SCREEN = 'SignUpScreen',
  FORGOT_PASSWORD_SCREEN = 'Forgot Password Screen',
}

export type RootStackParamList = {
  [ScreenName.SIGN_IN_SCREEN]: undefined;
  [ScreenName.SIGN_UP_SCREEN]: undefined;
  [ScreenName.FORGOT_PASSWORD_SCREEN]: undefined;
};
