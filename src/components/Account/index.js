import React from 'react';
import { AuthUserContext } from '../Session';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <h4>Change Password</h4>
        <PasswordChangeForm />
        <h4>Forgot Password</h4>
        <PasswordForgetForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(authCondition),
)(AccountPage);
