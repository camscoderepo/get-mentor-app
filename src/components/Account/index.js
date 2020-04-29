import React from 'react';
import { AuthUserContext } from '../Session';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import PageContainer from '../PageContainer';
import HeadingOne from '../Heading';
import { AccountContent } from './account-styles';
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <PageContainer>
        <AccountContent>
          <HeadingOne>Account: {authUser.email}</HeadingOne>
          <h4>Change Password</h4>
          <PasswordChangeForm />
          <h4>Forgot Password</h4>
          <PasswordForgetForm />
        </AccountContent>
      </PageContainer>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(authCondition),
)(AccountPage);
