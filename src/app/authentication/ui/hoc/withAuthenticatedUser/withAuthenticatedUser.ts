import {connect} from 'react-redux';
import {RootState} from '../../../../global/adapters/store';
import {ComponentType} from 'react';

const withAuthenticatedUser = (Component: ComponentType<any>) => {
  const mapStateToProps = (state: RootState) => ({
    ready: state.authenticationState.ready,
    currentUser: state.authenticationState.currentUser,
  });

  return connect(mapStateToProps)(Component);
};

export default withAuthenticatedUser;
