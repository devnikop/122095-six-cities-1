import { Redirect } from 'react-router-dom';
import * as React from 'react';

const withPrivateRoute = (Component, authorizationData) => {
  class WithPrivateRoute extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      if (!Object.keys(authorizationData).length) {
        return <Redirect to="/login" />;
      }
      return <Component
        {...this.props}
      />;
    }
  }

  return WithPrivateRoute;
};

export default withPrivateRoute;
