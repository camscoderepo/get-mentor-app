import React from 'react';
import { AuthUserContext } from '../Session';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import {
  AccountPageContainer,
  AccountPageHeading,
} from './account-styles';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <AccountPageContainer>
        <AccountPageHeading>
          Account: {authUser.email}
        </AccountPageHeading>
        <h4>Change Password</h4>
        <PasswordChangeForm />
        <h4>Forgot Password</h4>
        <PasswordForgetForm />
      </AccountPageContainer>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(authCondition),
)(AccountPage);
