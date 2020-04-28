import React from 'react';
import { AuthUserContext } from '../Session';
import { compose } from 'recompose';
import { withAuthorization, withEmailVerification } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import PageContainer from '../PageContainer';
import HeadingOne from '../Heading';
const AccountPage = () => (
  <AuthUserContext.Consumer>
    {(authUser) => (
      <PageContainer>
        <HeadingOne>Account: {authUser.email}</HeadingOne>
        <h4>Change Password</h4>
        <PasswordChangeForm />
        <h4>Forgot Password</h4>
        <PasswordForgetForm />
      </PageContainer>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(authCondition),
)(AccountPage);
