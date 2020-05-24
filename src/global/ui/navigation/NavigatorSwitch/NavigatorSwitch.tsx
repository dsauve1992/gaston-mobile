import SplashScreen from '../screens/SplashScreen';
import * as React from 'react';
import withAuthenticatedUser from '../../../../authentication/ui/hoc/withAuthenticatedUser/withAuthenticatedUser';
import AuthenticationBootstraper from '../../../../authentication/adapters/AuthenticationBootstraper';
import AuthenticationNavigator from '../../../../authentication/ui/navigation/AuthenticationNavigator/AuthenticationNavigator';
import AppNavigator from '../AppNavigator/AppNavigator';

type Props = {
  ready: boolean;
  currentUser: any;
};

type State = {
  displaySplashScreen: boolean;
};

class NavigatorSwitch extends React.Component<Props, State> {
  constructor(props: Readonly<Props>) {
    super(props);

    this.state = {
      displaySplashScreen: true,
    };
  }

  componentDidMount(): void {
    AuthenticationBootstraper.getInstance().boot();

    if (this.props.ready) {
      setTimeout(() => {
        this.setState({
          displaySplashScreen: false,
        });
      }, 2000);
    }
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    // Smell
    if (!prevProps.ready && this.props.ready) {
      setTimeout(() => {
        this.setState({
          displaySplashScreen: false,
        });
      }, 2000);
    }
  }

  render() {
    const {displaySplashScreen} = this.state;
    const {currentUser} = this.props;

    if (displaySplashScreen) {
      return <SplashScreen />;
    }

    if (currentUser) {
      return <AppNavigator />;
    } else {
      return <AuthenticationNavigator />;
    }
  }
}

export default withAuthenticatedUser(NavigatorSwitch);
